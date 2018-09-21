<?php
include("config.php");

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

// validate the variables ======================================================

$email = $password = $encrypt_password = "";
$email = test_input($_POST['email']);
$password = test_input($_POST['password']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL))
	$errors['email'] = 'Ops! Your Email format does not look good.';

if (empty($password))
	$errors['password'] = 'Password is required.';


// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors) || ! empty($data)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;

	} else {
		
		// if there are no errors, return a message
		$encrypt_password = md5($password);		
		$sql = "INSERT INTO USERS (Uemail, Upassword, Utype)
		VALUES ('$email', '$encrypt_password',3)";

		if (mysqli_query($conn, $sql)) {
			
			$data['success'] = true;
			$data['message'] = 'you have successfully registered!';
			
		} else {
			
			$data['success'] = false;
			//$data['message'] = 'Error: ' . $sql . ' ' . mysqli_error($conn);
			$data['message'] = 'Database error! You account cannot be created at this moment. Try again later.';
			
		}
	}
	// return all our data to an AJAX call
	mysqli_close($conn);
	echo json_encode($data);
