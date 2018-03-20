<?php
	$n = $_GET['n'];
	$s = $_GET['n'];
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
	
	$sql = "SELECT * FROM PLAYERDB WHERE Name = '".$n."'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		 // output data of each row
		$row = $result->fetch_assoc();
		$out = 	$row['Health'] . "," . $row['roll'] . "," . $row['Strength'] . "," . 
					$row['Magic'] . "," . $row['Endurance'] . "," .
					$row['Agility'] . "," . $row['Perception'] . "," .
					$row['Charisma'];
		
		if ($s != $out) { 
			echo "1";
		}
	} 

	$conn->close();
?>
