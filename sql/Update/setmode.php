<?php
	$m 		= $_GET['m'];
	$v1 	= $_GET['v1'];
	$v2 	= $_GET['v2'];
	$v3 	= $_GET['v3'];
	$v4 	= $_GET['v4'];
	$v5 	= $_GET['v5'];
	$roll 	= $_GET['roll'];
	$r1	 	= $_GET['r1'];
	
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
	
	$sql = 	"UPDATE PLAY set " . 
			"Mode = '" .$m . "', " .
			"v1 = '" . $v1 . "', " .
			"v2 = '" . $v2 . "', " .
			"v3 = '" . $v3 . "', " .
			"v4 = '" . $v4 . "', " .
			"v5 = '" . $v5 . "', " .
			"roll = '".$roll."', " .
			"r1 = '" .$r1. "' " .		 
			"WHERE ID = '0'";
	if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error updating record: " . $conn->error;
	}
	$conn->close();
?>