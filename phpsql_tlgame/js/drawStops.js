
function drawStops(map,tripID){
	var route = [];
	d3.csv("translinkApi/stop_times.csv", function(data) {
	  for(var i = 0; i < data.length; i++){
	  	if(data[i]['trip_id'] == tripID){
	  		route.push(data[i]);
	  	}
	  }
	 
      // console.log(data[0]);
      // console.log(route);

      var routePath = [];
      // var route2 = [];
      var segmentPos = {};

       $.getJSON('translinkApi/stops.json', function (data){
    	// console.log(data[0])
    	// console.log(route)
    	for(var j = 0; j < route.length; j++){
    		for(var k = 0; k < data.length; k++){
    			if(data[k]['stop_id'] == route[j]['stop_id']){
    				// route2.push(data[k]['stop_lat']);
    				routePath.push(new google.maps.LatLng(data[k]['stop_lat'], data[k]['stop_lon']));
    				segmentPos.lat = data[k]['stop_lat'];
    				segmentPos.lng = data[k]['stop_lon'];
    				console.log(segmentPos)
    				drawMarker(map,segmentPos,"flag_point5");
    			}
    		}

    		
    	}

    	// Creates the polyline object
	      // var polyline = new google.maps.Polyline({
	      //   map: map,
	      //   path: routePath,
	      //   strokeColor: '#0000FF',
	      //   strokeOpacity: 0.7,
	      //   strokeWeight: 3
	      // });
// console.log(route2)
    });

    });
}


   

    
