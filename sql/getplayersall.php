<?php
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
	
	$sql = "SELECT * FROM playerdb";
	$result = $conn->query($sql);
	/*if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error getting record: " . $conn->error;
	}*/
	if ($result->num_rows > 0) {
		 // output data of each row
		$names = 0;
		echo "<div id=\"playerstats\">";
		while( $row = $result->fetch_assoc() ) {
			$names = $names + 1;
			$out = 	$row['ID']		. "," .$row['Name']		. "," .
					$row['Health'] 		. "," . $row['roll'] 	. "," . 
					$row['Strength'] 	. "," . $row['Magic'] 	. "," . 
					$row['Endurance'] 	. "," . $row['Agility'] . "," . 
					$row['Perception'] 	. "," . $row['Charisma'] . "!!";
			echo $out;
		}
		echo "</div>";
	}
	$conn->close();
?>
