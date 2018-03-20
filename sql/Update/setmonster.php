<?php
	$id		= $_GET['id'];
	$n		= $_GET['n'];
	$a		= $_GET['a'];
	$d		= $_GET['d'];	
	$h		= $_GET['h'];	
	
	$n = str_replace("'"," ",$n);
	
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
	
	$sql = 	"UPDATE monsterdb SET " . 
			"Name = '" 		. $n . "', " .	
			"Attack = '" 	. $a . "', " .	
			"Defence = '" 	. $d . "', " .	
			"Health = '" 	. $h . "' " .				
			"WHERE id = '" . $id . "'";
	
	if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error updating record: " . $conn->error;
	}
	$conn->close();
?>