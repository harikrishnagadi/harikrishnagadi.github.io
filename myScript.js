

var uluru;
var map,infowindow,marker;
function loadfire(){

      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6rmr0WraTbFRJIJe-vPcJiQ0mBhLqgLk",
    authDomain: "objectdetect-d588a.firebaseapp.com",
    databaseURL: "https://objectdetect-d588a.firebaseio.com",
    projectId: "objectdetect-d588a",
    storageBucket: "objectdetect-d588a.appspot.com",
    messagingSenderId: "456983067683",
    serviceAccount : "./objectdetect-d588a-firebase-adminsdk-jt7q4-aa2bf3e778.json"
  };
  firebase.initializeApp(config);


 contentString='<div><img src="images/my.png" alt="No latest Detection" style="width:300px;height:300px;"></div>'

 var ref = firebase.database().ref('/cameras/camera1');
 //console.log(ref)
 ref.once('value',function(snapshot){
   console.log(snapshot.val()["loc"])
   if(snapshot.val()["loc"] != null){
      map.setCenter(snapshot.val()["loc"]);
      marker = new google.maps.Marker({position:snapshot.val()["loc"] , animation: google.maps.Animation.DROP,map: map});
     marker.addListener('click', togglepop);
     infowindow = new google.maps.InfoWindow({
          content: contentString
    });
     var trafficLayer = new google.maps.TrafficLayer();
     trafficLayer.setMap(map);
   }
 });

ref.on('value',function (snapshot){
   //console.log(snapshot.val()["objects"]['person']['count'])
     console.log("hi")
   data  = snapshot.val()["objects"];
   for (key in data){

      if(key==='person'){
         //console.log(snapshot.val()["objects"][key]['count'])
         document.getElementById('value1').innerHTML=data[key]['count']
         document.getElementById('time1').innerHTML="Last updated: "+data[key]['timestamp']
      }
      else if (key==='car') {
        document.getElementById('value2').innerHTML=data[key]['count']
        document.getElementById('time2').innerHTML="Last updated: "+data[key]['timestamp']

      }
    else if (key==='bike') {
      document.getElementById('value3').innerHTML=data[key]['count']
      document.getElementById('time3').innerHTML="Last updated: "+data[key]['timestamp']

    }
   }
});

}

function togglepop() {
        //alert("clicked")
        infowindow.open(map,marker)
      }

function initMap() {
        // Styles a map in night mode.

        loadfire();
         uluru = {lat: 17.726367, lng: 83.320782};
      // The marker, positioned at Uluru
        map = new google.maps.Map(document.getElementById('map'), {
          center: uluru,
          zoom: 18,
          styles: [

          ]
        });

      }
