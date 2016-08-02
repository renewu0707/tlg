var selectedRouteID;
function generateRouteCard(){
	// var routeCard = {};
	var routeCardArray = [];

	var tempStart = [];
	var tempEnd = [];

	$.getJSON('translinkApi/shapes.json', function (data) {

		    // save the start point into tempStart array and save the end point of the route into tempEnd array
		    //need to push the first and last point manually
			tempStart.push(data[0]);

			for(var i = 1; i < data.length; i++){
				if(data[i]['shape_id'] != data[i-1]['shape_id']){
					tempEnd.push(data[i-1]);
					tempStart.push(data[i]);

					// routeCardArray.push(routeCard);
				}
			}

			tempEnd.push(data[data.length - 1]);

            // create a routeCard array with the infomation we need
			for(var j = 0; j < tempStart.length; j++){
		        
		        routeCardArray.push({
		        	'route_id': tempStart[j]['shape_id'],
		        	'route_start_lat': tempStart[j]['shape_pt_lat'],
		        	'route_start_lon': tempStart[j]['shape_pt_lon'],
		        	'route_end_lat': tempEnd[j]['shape_pt_lat'],
		        	'route_end_lon': tempEnd[j]['shape_pt_lon']
		        });
		        // console.log(routeCard)
			}

// console.log(routeCardArray)
      // generate 5 random numbers as index to query routeCardArray
      for(var k = 0; k < 5; k++){
      	// +91 is because there are 1091 objects in routeCardArray
      	var randomIndex = Math.floor((Math.random() * 1000) + 91);
      	// console.log(randomIndex);
      	var routeListItem =  document.createElement('li');
	    routeListItem.className = "list-group-item";
	    routeListItem.id = routeCardArray[randomIndex]['route_id'];
	    routeListItem.innerHTML = "Route : " + routeCardArray[randomIndex]['route_id'] + "</br>" + "Start From : " + routeCardArray[randomIndex]['route_start_lat'] + "," + routeCardArray[randomIndex]['route_start_lon'] + "</br>" + "End At : " + routeCardArray[randomIndex]['route_end_lat'] + "," + routeCardArray[randomIndex]['route_end_lon'];
	 
	    $('#routeCardList').append(routeListItem);

	    $('#' + routeListItem.id).click(function(){
	    	// location.href = "index.html";
	    	drawRoute(map, this.id);
            // selectedRouteID = this.id;
            // return selectedRouteID;
             // console.log(selectedRouteID)
          });

	    console.log(selectedRouteID)
      }
     
			

		
	});


}