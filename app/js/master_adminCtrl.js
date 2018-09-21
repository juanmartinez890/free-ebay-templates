app.controller('masterAdminCtrl',function($rootScope, checkUserSession){
	checkUserSession.fetchUserDetails().success(function(response){
		$rootScope.userEmail = response.userEmail;
	});
});