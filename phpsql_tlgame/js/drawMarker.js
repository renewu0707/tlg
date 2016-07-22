// function drawMarker(map,lat,lng){
function drawMarker(map,position,imageLabel){

      switch(imageLabel){
        case "current_location":
          image = 'img/circleMarker.png';
          break;
        case "flag_point5":
          
          image = {
            url: 'img/flag_point5.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(30,35),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 30)
          };
          break;
      }
      
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