<?php
	$d = $_GET['d'];
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
	
	$sql = "SELECT * FROM " . $d;
	$result = $conn->query($sql);
	/*if ($conn->query($sql) === TRUE) {
		echo $sql;
	} else {
		echo "Error getting record: " . $conn->error;
	}*/
	if ($result->num_rows > 0) {
		 // output data of each row

		while( $row = $result->fetch_assoc() ) {

			$out = 	$row['Name'] . "," .
					$row['Health'] . "!!";
			echo $out;
		}
	
	}
	$conn->close();
?>
