
	
    // console.log(data[0]);
    function drawRoute(map,routeID){

      // the array to store all points along the route as object
         var route = [];

    	$.getJSON('translinkApi/shapes.json', function (data) {
    	   
    	   // the array to store all points along the route as map LatLng object
    	   var routePath = [];
    	   // this route is the millimium line
    	   // var routeID = 191080;
    	   for(var i = 0; i < data.length; i++){
    	   	if(data[i]['shape_id'] === routeID){
    	   		route.push(data[i]);
    	   	}
    	   }
          
           // set center to be route start point
           var centerPos = {
	        lat: route[0]['shape_pt_lat'],
	        lng: route[0]['shape_pt_lon']
	       };
          
           map.setCenter(centerPos);

           var segmentPos = {};

           // build LatLng object array to draw path of the route
           for(var j = 0; j < route.length; j++){
             routePath.push(new google.maps.LatLng(route[j]['shape_pt_lat'], route[j]['shape_pt_lon']));

            //  if(route[j]['shape_pt_sequence']%50 === 1){
            //     segmentPos.lat = route[j]['shape_pt_lat'];
            //     segmentPos.lng = route[j]['shape_pt_lon'];
            //     // console.log(position)
            //     drawMarker(map,segmentPos,"flag_point5");
            // }
           }

           // console.log(routePath)

           // Creates the polyline object
	      var polyline = new google.maps.Polyline({
	        map: map,
	        path: routePath,
	        strokeColor: '#0000FF',
	        strokeOpacity: 0.7,
	        strokeWeight: 3
	      });
        

        // ;   
  }); 

}