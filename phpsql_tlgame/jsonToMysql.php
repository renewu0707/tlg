<?php
    //connect to mysql db
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "tlgamedb";

    // // Create connection
    // $conn = new mysqli($servername, $username, $password, $dbname);
    // // Check connection
    // if ($conn->connect_error) {
    //     die("Connection failed: " . $conn->connect_error);
    // } 
    //connect to the employee database
    // mysql_select_db("employee", $con);

    //read the json file contents
    $jsondata = file_get_contents('shapes.json');
    
    //convert json object to php associative array
    $data = json_decode($jsondata, true);

    $route = array();
    
    for ($i = 1; $i <= count($data); $i++) {
       if($data[$i]['shape_id'] != $data[$i-1]['shape_id']){
        array_push($route,$data[$i]['shape_id']);
        
       }
    }
    print_r($route);
    // $routeID = $data['shape_id'];
    // $routeStartLat = $data['shape_pt_lat']['name'];
    // $routeStartLng = $data['shape_pt_lon']['gender'];
    // $age = $data['personal']['age'];
    // $streetaddress = $data['personal']['address']['streetaddress'];
    // $city = $data['personal']['address']['city'];
    // $state = $data['personal']['address']['state'];
    // $postalcode = $data['personal']['address']['postalcode'];
    // $designation = $data['profile']['designation'];
    // $department = $data['profile']['department'];
    
    //insert into mysql table
    // $sql = "INSERT INTO tbl_emp(empid, empname, gender, age, streetaddress, city, state, postalcode, designation, department)
    // VALUES('$id', '$name', '$gender', '$age', '$streetaddress', '$city', '$state', '$postalcode', '$designation', '$department')";
    // if(!mysql_query($sql,$con))
    // {
    //     die('Error : ' . mysql_error());
    // }
?>