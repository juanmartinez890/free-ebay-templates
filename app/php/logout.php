<?php
include("config.php");
$data 			= array(); 		// array to pass back data

session_start();
session_destroy();

$data['msg'] = "You have successfully logged out!";

mysqli_close($conn);
echo json_encode($data);

?>