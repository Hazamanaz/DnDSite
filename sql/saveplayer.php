<?php
	$id = $_GET['id'];
	$h = $_GET['h'];
	$s = $_GET['s'];
	$m = $_GET['m'];
	$e = $_GET['e'];
	$a = $_GET['a'];
	$p = $_GET['p'];
	$c = $_GET['c'];
	$r = $_GET['r'];
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
	
	$sql = 	"UPDATE PLAYERDB SET " . 
			"Health = '" 		. $h . "'," .
			"Strength = '" 		. $s . "'," .
			"Magic = '" 		. $m . "'," .
			"Endurance = '" 	. $e . "'," .
			"Agility = '" 		. $a . "'," .
			"Perception = '" 	. $p . "'," .
			"Charisma = '" 		. $c . "'," .
			"roll = '" 			. $r . "'" .
			" WHERE ID = '".$id."'";
	if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error updating record: " . $conn->error;
	}
	$conn->close();
?>
