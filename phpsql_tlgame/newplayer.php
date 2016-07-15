<?php

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
  
//Escape user inputs for security
$name_s = mysqli_real_escape_string($conn, $_POST['playerName']);
$email_s = mysqli_real_escape_string($conn, $_POST['playerEmail']);
$psrd_s = mysqli_real_escape_string($conn, $_POST['playerPsrd']);
 
// attempt insert query execution
//the table name and column names have to exist before execute the following query
$sql = "INSERT INTO playerlist (playerName, playerEmail, playerPsrd) VALUES ('$name_s', '$email_s', '$psrd_s')";
// $sql = "INSERT INTO feedback (name, email, comments) VALUES ('www', 'www@gmail.com', 'dddd')";
if ($conn->query($sql) === TRUE) {
	echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
    // echo "New record created successfully";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    echo "<script type='text/javascript'>alert('failed!')</script>";
}

$conn->close();
?>