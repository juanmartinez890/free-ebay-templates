var app = angular.module("myApp", ["ngRoute","ngclipboard","angularTrix"]);

// Create any type of user with temporal passowrd
// User shall use the temporal pass to create a new password and delete a temporal Password

// Master () Admin 
// LITE () User (Limited templates and Themes)
// BASIC () User (3 layouts and 12 Themes + Document saving)
// PRO () User (Basic + cloud storage + Document saving)

app.run(function($rootScope) {
	$rootScope.css = "flatly";
});


app.config(function($routeProvider) {
	$routeProvider
	
	// LOGIN ROUTER IN CASE YOU HAVE A SESSION AND YOU WANT TO GO BACK TO LOGIN SCREEN
	.when("/", {
		templateUrl : "login.html",
		controller : "loginCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 1){
						$location.path('/masterHome');
					}else if (response.success === 2) {
						$location.path('/proHome');
					}else if (response.success === 3) {
						$location.path('/basicHome');
					}else if (response.success === 4) {
						$location.path('/liteHome');
					}
					else{
					$location.path('/');					
					}
				});
			}
		}
	})
	
	// LOGOUT
	.when("/logout", {
		templateUrl : "logout.html",
		controller : "logoutCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 0){
						$location.path('/');					
					}
				});
			}
		}
	})
	
	// RESET PASSWORD	
	.when("/resetPassword", {
		templateUrl : "reset_password.html",
		controller : "resetPasswordCtrl"
	})
	
	// REGISTER	
	.when("/register", {
		templateUrl : "register.html",
		controller : "registerCtrl"
	})
	
	// MASTER ADMIN ROUTER
	.when("/masterHome", {
		templateUrl : "master/index.html",
		// change controller name
		controller : "masterAdminCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 1){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// PRO USER ROUTER
	.when("/proHome", {
		templateUrl : "pro/index.html",
		// change controller name
		controller : "adminCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 2){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// BASIC USER ROUTER
	.when("/basicHome", {
		templateUrl : "basic/themes.html",
		// change controller name
		controller : "basicThemesCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 3){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// BASIC USER (THEMES)
	.when("/basicLayouts", {
		templateUrl : "basic/layouts.html",
		// change controller name
		controller : "basicLayoutsCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 3){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// BASIC USER (SINGLE COLUMN)
	.when("/basicSingleGrid", {
		templateUrl : "basic/createSingle.html",
		// change controller name
		controller : "creatorCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 3){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// BASIC USER (RIGHT COLUMN)
	.when("/basicRightGrid", {
		templateUrl : "basic/createRight.html",
		// change controller name
		controller : "creatorCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 3){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	// BASIC USER (LEFT COLUMN)
	.when("/basicLeftGrid", {
		templateUrl : "basic/createLeft.html",
		// change controller name
		controller : "creatorCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 3){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	//LITE USER ROUTER
	.when("/liteHome", {
		templateUrl : "lite/index.html",
		controller : "brokerCtrl",
		resolve:{
			"check":function(checkUserSession,$location){
				checkUserSession.fetchUserDetails().success(function(response){
					if(response.success === 4){

					}else{
						$location.path('/');
					}
				});
			}
		}
	})
	
	//OTHERWISE RETURN TO MAIN FOLDER WHERE THE LOGIN IS
	.otherwise({
		redirectTo: "/"
	});
});	

app.factory("checkUserSession", ['$http',function($http){  
	var obj = {};
	
	obj.fetchUserDetails = function(){ 
		return $http.get('php/session.php');
	}

	return obj;
}]);