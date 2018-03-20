<?php
	$n		= $_GET['n'];
	$h		= $_GET['h'];
	$d		= $_GET['d'];	
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gamedb";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		 die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = 	"UPDATE " . $d . " set " . 
			"health = '" .$h . "' " .		 
			"WHERE name = '" . $n . "'";
	if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error updating record: " . $conn->error;
	}
	$conn->close();
?>