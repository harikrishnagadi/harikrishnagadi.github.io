

var uluru;
var map, infoWindow;
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

 var ref = firebase.database().ref('/cameras/camera1');
 //console.log(ref)
 ref.once('value',function(snapshot){
   console.log(snapshot.val()["loc"])
   if(snapshot.val()["loc"] != null){
      map.setCenter(snapshot.val()["loc"    ]);
     var marker = new google.maps.Marker({position:snapshot.val()["loc"] , map: map});
   }
 });

ref.on('value',function (snapshot){
   console.log(snapshot.val()["objects"])
});

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
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.school',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },


          ]
        });








      }
