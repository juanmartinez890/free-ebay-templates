<?php
include("config.php");
session_start();

$data 			= array(); 		// array to pass back data

if(!isset($_SESSION['userSession'])){
	$data['success'] = 0;

}else{
	
	$data['userEmail'] = $_SESSION['userSession'];

	if($_SESSION['userType'] === 1){
		
		$data['success'] = 1;
		
	}elseif ($_SESSION['userType'] === 2){
		
		$data['success'] = 2;
		
	}elseif ($_SESSION['userType'] === 3){
		
		$data['success'] = 3;
		
	}elseif ($_SESSION['userType'] === 4){
		
		$data['success'] = 4;
		
	}else{
		
		$data['success'] = 0;
	}	
}

mysqli_close($conn);
echo json_encode($data);