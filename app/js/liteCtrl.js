app.controller('brokerCtrl',function($rootScope, checkUserSession){
	checkUserSession.fetchUserDetails().success(function(response){
		$rootScope.userEmail = response.userEmail;
	});
});