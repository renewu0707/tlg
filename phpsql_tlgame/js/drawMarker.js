// function drawMarker(map,lat,lng){
function drawMarker(map,position){
      
      var image = 'img/circleMarker.png';
      var locationMarker = new google.maps.Marker({
        // position: {lat: lat, lng: lng},
        position: position,
        map: map,
        icon: image,
        draggable: true,
        // animation: google.maps.Animation.DROP
      });

      // locationMarker.addListener('click', toggleBounce);

      // function toggleBounce() {
      //   if (locationMarker.getAnimation() !== null) {
      //     locationMarker.setAnimation(null);
      //   } else {
      //     locationMarker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }
    }