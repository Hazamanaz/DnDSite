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
	
	$sql = "SELECT Name FROM PLAYERDB ORDER BY ID";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		 // output data of each row
		$names = "";
		while($row = $result->fetch_assoc()) {
			echo "<option value=\"" . $row['Name']. "\">". $row['Name'] ."</option>";
		}
		
	} 
	else {
		 echo "<element id = \"names\" hidden></element>";
	}

	$conn->close();
?>
