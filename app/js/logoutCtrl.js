
app.controller('logoutCtrl', function($scope, $http) {
	$http.get("php/logout.php")
	.then(function(response) {
			$scope.msg = response.data.msg;
	}, function(response) {
			$scope.msg = "Something went wrong";
	});
});