<?php
include("config.php");
session_start();

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
		$data['success'] = 0;
		$data['errors']  = $errors;

	} else {

		// if there are no errors, return a message
		$encrypt_password = md5($password);
		$sql="SELECT * FROM USERS WHERE Uemail = '$email' and Upassword = '$encrypt_password'";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) == 1) {
			
			//$row = mysqli_fetch_assoc($result);
			//$Utype = (int)$row['Utype'];
			//$data['success'] = $Utype;
			$data['success'] = 3;
			$data['message'] = 'Welcome, '.$email;
			
			$_SESSION['userSession'] = $email;
			//$_SESSION['userType'] = $Utype;
			$_SESSION['userType'] = 3;


		} else {

			$data['success'] = 0;
			$data['message'] = 'Ops! You got a wrong email or password.';
			//$data['message'] = 'Error: ' . $sql . ' ' . mysqli_error($conn);

		}
	}
	// return all our data to an AJAX call
	mysqli_close($conn);
	echo json_encode($data);
?>