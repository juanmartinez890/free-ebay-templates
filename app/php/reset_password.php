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

$email = $password = $tpassword = $encrypt_password = "";
$email = test_input($_POST['email']);
$password = test_input($_POST['password']);
$tpassword = test_input($_POST['tpassword']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL))
	$errors['email'] = 'Ops! Your Email format does not look good.';

if (empty($password))
	$errors['password'] = 'Password is required.';

if (empty($tpassword))
	$errors['tpassword'] = 'Temporal password is required.';

// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors) || ! empty($data)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		
		// if there are no errors, return a message
		$encrypt_old_password = md5($tpassword);	
		$sql="SELECT * FROM USERS WHERE Uemail = '$email' and Upassword = '$encrypt_old_password'";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) == 1) {
			
			$encrypt_new_password = md5($password);	
			$sql = "UPDATE USERS SET Upassword='$encrypt_new_password'
			WHERE Uemail = '$email' AND Upassword = '$encrypt_old_password'";
			
			if (mysqli_query($conn, $sql)) {
				$data['success'] = true;
				$data['message'] = 'Password successfully updeated!';
			} else {
				$data['success'] = false;
				$data['message'] = 'Database Error! Password could not be updated.';
			}
			
		} else {
			$data['success'] = false;
			$data['message'] = 'Ops! You got a wrong email or password.';
		}
	}
	// return all our data to an AJAX call
	mysqli_close($conn);
	echo json_encode($data);