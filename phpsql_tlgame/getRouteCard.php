<?php 

  //--------------------------------------------------------------------------
  // get route cards from MySQL
  //--------------------------------------------------------------------------
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

  // random select 5 records from routeCard table
  $sql = "SELECT * FROM routecard ORDER BY RAND() LIMIT 5";
 //$sql = "SELECT * FROM routecard WHERE route_id = 189960";
  $result = mysqli_query($conn, $sql);
 
//create an array
    $emparray = array();
    // fetch_assoc will create an array with key-value pairs
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;

    }
    // return the array as a json
    echo json_encode($emparray);

?>