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
// $name_s = $_POST['playerName'];
// $email_s = $_POST['playerEmail'];
// $psrd_s = $_POST['playerPsrd'];

// check if email already existed
$queryEmail = "SELECT * FROM playerlist WHERE playerEmail = '$email_s'";
$queryEmailResult = mysqli_query($conn, $queryEmail);
if(mysqli_num_rows($queryEmailResult) > 0){
	// echo "<script type='text/javascript'>alert('Player Existed!')</script>";
	// echo "already registered.";

	$queryPsrd = "SELECT * FROM playerlist WHERE playerEmail = '$email_s' AND playerPsrd ='$psrd_s'";
	$queryPsrdResult = mysqli_query($conn, $queryPsrd);
	if(mysqli_num_rows($queryPsrdResult) == 1){
		echo "<script type='text/javascript'>alert('login successfully!')</script>";
		// header("location:newplayer.php");
		// exit();
		// echo "log in successfully";
	}
	else{
		echo "<script type='text/javascript'>alert('Incorrect Password')</script>";
		// echo "incorrect password";

	}
	
}
else{
// attempt insert query execution
//the table name and column names have to exist before execute the following query
$sql = "INSERT INTO playerlist (playerName, playerEmail, playerPsrd) VALUES ('$name_s', '$email_s', '$psrd_s')";
if ($conn->query($sql) === TRUE) {
	echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
    // echo "New record created successfully";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    echo "<script type='text/javascript'>alert('failed!')</script>";
}
}



$conn->close();
?>