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
	
	$sql = "SELECT * FROM pictures";
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		
		while( $row = $result->fetch_assoc() ) {
			$out = 	"<div id=\"" . $row['Type'] . "\" hidden>" .$row['Data'] . "</div>";
			echo $out;
		}
		
	}
	$conn->close();
?>
