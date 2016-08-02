
function drawStops(map,routeID){
  // here the routeID i am using shape_id to represent each route
  $.getJSON('translinkApi/trips.json',function(data){
   var trip = [];
   for(var i = 0; i < data.length; i++){
       if(data[i]['shape_id'] === routeID){
        trip.push(data[i]);
       }
   }
  
	var route = [];
	d3.csv("translinkApi/stop_times.csv", function(data) {

	  for(var i = 0; i < data.length; i++){
	  	if(data[i]['trip_id'] == trip[0]['trip_id']){
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

    });

    });

 });
}


   

    
