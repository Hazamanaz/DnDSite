<?php
	$n = $_GET['n'];
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
	$row = $result->fetch_assoc();
	$out = 	$row['Health'] 		. "," . $row['roll'] 	. "," . 
			$row['Strength'] 	. "," . $row['Magic'] 	. "," . 
			$row['Endurance'] 	. "," . $row['Agility'] . "," . 
			$row['Perception'] 	. "," . $row['Charisma'];
	

	echo "<element id = \"stats\" hidden>" . $out . "</element>";
	
	$conn->close();
?>
