<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password);
	
	// Check connection
	if ($conn->connect_error) 
	{
		 die("Connection failed: " . $conn->connect_error);
	}
	
	// SQL query
	$sql = 	"CREATE TABLE player (
        column1 datatype,
        column2 datatype,
        column3 datatype,
       ....
    )";
	
	// Execute query
	if ($conn->query($sql) === TRUE) 
	{
		echo $sql;
	} 
	else 
	{
		echo "Error creating DB gamedb";
	}

	// Close connection
	$conn->close();