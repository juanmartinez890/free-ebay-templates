app.controller("loginCtrl", function ($scope, $http, $location) {

	$scope.formData = {};

	$scope.processForm = function() {
		$http({
			method  : 'POST',
			url     : 'php/login.php',
			data    : $.param($scope.formData), 
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
			console.log(data);

			if (data.success === 0) {
           	// ERROR
           	$scope.message = data.message;
           	
           		if (data.message) {
           			$scope.errorEmail = '';
           			$scope.errorPassword = '';
           		}else{
           			$scope.errorEmail = data.errors.email;
           			$scope.errorPassword = data.errors.password;
           		}
           	
           	}else if (data.success === 1) {
		    // LOGIN MASTER ADMIN
            $scope.errorEmail = '';
            $scope.errorPassword = '';
            $location.path('/masterHome');
			
   			}else if (data.success === 2) {
           	// LOGIN PRO USER
           	$scope.errorEmail = '';
           	$scope.errorPassword = '';
            $location.path('/proHome');
			
			}else if(data.success === 3){
			// LOGIN BASIC USER
			$scope.errorEmail = '';
			$scope.errorPassword = '';
			$location.path('/basicHome');

			}else if(data.success === 4){
			// LOGIN LITE
			$scope.errorEmail = '';
		   	$scope.errorPassword = '';
			$location.path('/liteHome');
			
           	}else {
			//ERROR
			$scope.message = "Something wrong happened";
			}
        });
	};
});