<?php

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "Magiclister";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		
		$data['success'] = false;
		$data['message'] = 'Ops! The connection to the server failed.';
		//$data['message'] = 'Connection failed: ' . $conn->connect_error;
	}

?>
