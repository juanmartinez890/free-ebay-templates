<?php

	// Connect to Database ======================================================

	$servername = "localhost";
	$username = "root";
	$password = "!MRdinosaurio825";
	$dbname = "magiclister";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		//$data['message'] = 'Connection failed: ' . $conn->connect_error;
		$data['message'] = 'Ops! The connection to the server failed.';
	}
?>
