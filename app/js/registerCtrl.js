app.controller("registerCtrl", function ($scope, $http, $location) {

	// create a blank object to hold our form information
	// $scope will allow this to pass between controller and view
	$scope.formData = {};

	// process the form
	$scope.processForm = function() {
		$http({
			method  : 'POST',
			url     : 'php/register.php',
			data    : $.param($scope.formData),  // pass in data as strings
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		})
			.success(function(data) {
				console.log(data);

				if (!data.success) {
					// if not successful, bind errors to error variables
					$scope.message = data.message;
					$scope.errorEmail = data.errors.email;
					$scope.errorPassword = data.errors.password;
				} else {
					// if successful, bind success message to message
					$scope.message = data.message;
					$scope.errorEmail = '';
					$scope.errorPassword = '';
					$scope.errorTPassword = '';
					$location.path('/');

				}
			});
		};
	});