function watchLoc(map){

	var watchID = null;
	var target, options;

	function success(pos) {

	  geoCurrentLoc(map);


	  var crd = pos.coords;

	  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
	    console.log('Congratulations, you reached the target');
	    navigator.geolocation.clearWatch(id);
	  }
	}

	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	}

	target = {
	  latitude : 0,
	  longitude: 0
	};

	options = {
	  enableHighAccuracy: false,
	  timeout: 5000,
	  maximumAge: 0
	};

	watchID = navigator.geolocation.watchPosition(success, error, options);

	$("#stopTracking").click(function(){
    if(watchID){
      navigator.geolocation.clearWatch(watchID);
    }
    watchID = null;
  });
	 
}