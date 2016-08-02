<?php
    // connect to mysql db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tlgamedb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    // connect to the employee database
    // mysql_select_db("employee", $con);
    // the limited size of php is 128M by default, it's not enough for the shape.json file
    ini_set('memory_limit', '256M');

    //read the json file contents
    $jsondata = file_get_contents('translinkApi/shapes.json');
    // $data = file_get_contents('translinkApi/shapes.json');
    
    //convert json object to php associative array
    $data = json_decode($jsondata, true);

    $tempStart = array();
    $tempEnd = array();
    $routeCardArray = array();



    array_push($tempStart,$data[0]);
    // $arrLength = count($data);
    // echo $arrLength;

    for ($i = 1; $i < count($data); $i++) {
       if($data[$i]['shape_id'] != $data[$i-1]['shape_id']){
        array_push($tempEnd,$data[$i-1]);
        array_push($tempStart,$data[$i]);       
       }
    }
    
    array_push($tempEnd,$data[count($data)-1]);
 

    // print_r($data[0]);

    // create a routeCard array with the infomation we need
          

    for ($j = 0; $j < count($tempStart); $j++) {
        // array_push($routeCardArray, {
        //     'route_id' => $tempStart[$j]['shape_id'],
        //     'route_start_lat' => $tempStart[$j]['shape_pt_lat'],
        //     'route_start_lon'=> $tempStart[$j]['shape_pt_lon'],
        //     'route_end_lat'=> $tempEnd[$j]['shape_pt_lat'],
        //     'route_end_lon'=> $tempEnd[$j]['shape_pt_lon']
        // });

    

    // print_r($routeCardArray);

    $route_id = $tempStart[$j]['shape_id'];
    $route_start_lat = $tempStart[$j]['shape_pt_lat'];
    $route_start_lon = $tempStart[$j]['shape_pt_lon'];
    $route_end_lat = $tempEnd[$j]['shape_pt_lat'];
    $route_end_lon = $tempEnd[$j]['shape_pt_lon'];

    
    //insert into mysql table
    $sql = "INSERT INTO routeCard(route_id, route_start_lat, route_start_lon, route_end_lat, route_end_lon)
    VALUES('$route_id', '$route_start_lat', '$route_start_lon', '$route_end_lat', '$route_end_lon')";
    if ($conn->query($sql) === TRUE) {
    echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
    // echo "New record created successfully";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    echo "<script type='text/javascript'>alert('failed!')</script>";
}
}
?>