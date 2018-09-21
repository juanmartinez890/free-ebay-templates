
// LAYOUT PAGE CONTROLLER
app.controller('basicLayoutsCtrl',function($scope, checkUserSession){
	// get useremail
	checkUserSession.fetchUserDetails().success(function(response){
		$scope.userEmail = response.userEmail;
	});
});

// THEMES PAGE CONTROLER
app.controller('basicThemesCtrl', function($rootScope, $scope, $location, checkUserSession){
	
	// get useremail
	checkUserSession.fetchUserDetails().success(function(response){
		$scope.userEmail = response.userEmail;
	});
	
	$scope.viewCerulean = function(){
		$rootScope.css = "cerulean";
	}
	$scope.viewCosmo = function(){
		$rootScope.css = "cosmo";
	}
	$scope.viewCyborg = function(){
		$rootScope.css = "cyborg";
	}
	$scope.viewDarkly = function(){
		$rootScope.css = "darkly";
	}
	$scope.viewFlatly = function(){
		$rootScope.css = "flatly";
	}
	$scope.viewJournal = function(){
		$rootScope.css = "journal";
	}
	$scope.viewLumen = function(){
		$rootScope.css = "lumen";
	}
	$scope.viewPaper = function(){
		$rootScope.css = "paper";
	}
	$scope.viewReadable = function(){
		$rootScope.css = "readable";
	}
	$scope.viewSandstone = function(){
		$rootScope.css = "sandstone";
	}
	$scope.viewSimplex = function(){
		$rootScope.css = "simplex";
	}
	$scope.viewSlate = function(){
		$rootScope.css = "slate";
	}
	$scope.viewSolar = function(){
		$rootScope.css = "solar";
	}
	$scope.viewSpacelab = function(){
		$rootScope.css = "spacelab";
	}
	$scope.viewSuperhero = function(){
		$rootScope.css = "superhero";
	}
	$scope.viewUnited = function(){
		$rootScope.css = "united";
	}
	$scope.viewYeti = function(){
		$rootScope.css = "yeti";
	}
	
	$scope.selectCerulean = function(){
		$rootScope.css = "cerulean";
		$location.path('/basicLayouts');
	}
	$scope.selectCosmo = function(){
		$rootScope.css = "cosmo";
		$location.path('/basicLayouts');
	}
	$scope.selectCyborg = function(){
		$rootScope.css = "cyborg";
		$location.path('/basicLayouts');
	}
	$scope.selectDarkly = function(){
		$rootScope.css = "darkly";
		$location.path('/basicLayouts');
	}
	$scope.selectFlatly = function(){
		$rootScope.css = "flatly";
		$location.path('/basicLayouts');
	}
	$scope.selectJournal = function(){
		$rootScope.css = "journal";
		$location.path('/basicLayouts');
	}
	$scope.selectLumen = function(){
		$rootScope.css = "lumen";
		$location.path('/basicLayouts');
	}
	$scope.selectPaper = function(){
		$rootScope.css = "paper";
		$location.path('/basicLayouts');
	}
	$scope.selectReadable = function(){
		$rootScope.css = "readable";
		$location.path('/basicLayouts');
	}
	$scope.selectSandstone = function(){
		$rootScope.css = "sandstone";
		$location.path('/basicLayouts');
	}
	$scope.selectSimplex = function(){
		$rootScope.css = "simplex";
		$location.path('/basicLayouts');
	}
	$scope.selectSlate = function(){
		$rootScope.css = "slate";
		$location.path('/basicLayouts');
	}
	$scope.selectSolar = function(){
		$rootScope.css = "solar";
		$location.path('/basicLayouts');
	}
	$scope.selectSpacelab = function(){
		$rootScope.css = "spacelab";
		$location.path('/basicLayouts');
	}
	$scope.selectSuperhero = function(){
		$rootScope.css = "superhero";
		$location.path('/basicLayouts');
	}
	$scope.selectUnited = function(){
		$rootScope.css = "united";
		$location.path('/basicLayouts');
	}
	$scope.selectYeti = function(){
		$rootScope.css = "yeti";
		$location.path('/basicLayouts');

	}

	
});

// CREATOR PAGE CONTROLLER
app.controller('creatorCtrl', function ($scope, checkUserSession) {
	// get useremail
	checkUserSession.fetchUserDetails().success(function(response){
		$scope.userEmail = response.userEmail;
	});

	//HEADER
	$scope.IsHidden = false;
	$scope.storeNameText = "Store Name";
	$scope.buttonText = "remove";
	$scope.buttonTextColor = "btn-danger";
	$scope.ShowHideHeader = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.IsHidden = $scope.IsHidden ? false : true;
		if($scope.IsHidden == true){
			$scope.buttonText = "Add";
			$scope.buttonTextColor = "btn-success";
		}else{
			$scope.buttonText = "Remove";
			$scope.buttonTextColor = "btn-danger";
		}
	}
	
	//JUMBOTRON
	$scope.jumbotronIsHidden = true;
	$scope.jumbotronText = "Untitled";
	$scope.jumbotronTextDescription = "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.";
	$scope.jumbotronButtonText = "add";
	$scope.jumbotronButtonTextColor = "btn-success";
	$scope.ShowHideJumbotron = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.jumbotronIsHidden = $scope.jumbotronIsHidden ? false : true;
		if($scope.jumbotronIsHidden == true){
			$scope.jumbotronButtonText = "Add";
			$scope.jumbotronButtonTextColor = "btn-success";
		}else{
			$scope.jumbotronButtonText= "Remove";
			$scope.jumbotronButtonTextColor= "btn-danger";
		}
	}
		
	//NAVIGATION BAR NAVIGATION BAR NAVIGATION BAR NAVIGATION BAR
	$scope.navIsHidden = false;
	$scope.navButtonText = "Remove Nav";
	$scope.navButtonTextColor = "btn-danger";
	
	$scope.ShowHideNavigation = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navIsHidden = $scope.navIsHidden ? false : true;
		if($scope.navIsHidden == true){
			$scope.navButtonText = "Add Nav";
			$scope.navButtonTextColor = "btn-success";
		}else{
			$scope.navButtonText = "Remove Nav";
			$scope.navButtonTextColor = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 1
	$scope.navTabIsHidden1 = false;
	$scope.navTabButtonText1 = "remove";
	$scope.navTabButtonTextColor1 = "btn-danger";
	
	$scope.navTabText1 = "Store";
	$scope.navTabHyperlink1 = "http://www.ebay.com";
	
	$scope.ShowHideNavigationTab1 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navTabIsHidden1 = $scope.navTabIsHidden1 ? false : true;
		if($scope.navTabIsHidden1 == true){
			$scope.navTabButtonText1 = "Add";
			$scope.navTabButtonTextColor1 = "btn-success";

		}else{
			$scope.navTabButtonText1  = "Remove";
			$scope.navTabButtonTextColor1 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 2
	$scope.navTabIsHidden2 = false;
	$scope.navTabButtonText2 = "remove";
	$scope.navTabButtonTextColor2 = "btn-danger";
	
	$scope.navTabText2 = "About Us";
	$scope.navTabHyperlink2 = "http://www.ebay.com";
	
	$scope.ShowHideNavigationTab2 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navTabIsHidden2 = $scope.navTabIsHidden2 ? false : true;
		if($scope.navTabIsHidden2 == true){
			$scope.navTabButtonText2 = "Add";
			$scope.navTabButtonTextColor2 = "btn-success";

		}else{
			$scope.navTabButtonText2  = "Remove";
			$scope.navTabButtonTextColor2 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 3
	$scope.navTabIsHidden3 = false;
	$scope.navTabButtonText3 = "remove";
	$scope.navTabButtonTextColor3 = "btn-danger";
	
	$scope.navTabText3 = "Feedback";
	$scope.navTabHyperlink3 = "http://www.ebay.com";
	
	$scope.ShowHideNavigationTab3 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navTabIsHidden3 = $scope.navTabIsHidden3 ? false : true;
		if($scope.navTabIsHidden3 == true){
			$scope.navTabButtonText3 = "Add";
			$scope.navTabButtonTextColor3 = "btn-success";

		}else{
			$scope.navTabButtonText3  = "Remove";
			$scope.navTabButtonTextColor3 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 4
	$scope.navTabIsHidden4 = false;
	$scope.navTabButtonText4 = "remove";
	$scope.navTabButtonTextColor4 = "btn-danger";
	
	$scope.navTabText4 = "Newsletter";
	$scope.navTabHyperlink4 = "http://www.ebay.com";
	
	$scope.ShowHideNavigationTab4 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navTabIsHidden4 = $scope.navTabIsHidden4 ? false : true;
		if($scope.navTabIsHidden4 == true){
			$scope.navTabButtonText4 = "Add";
			$scope.navTabButtonTextColor4 = "btn-success";

		}else{
			$scope.navTabButtonText4  = "Remove";
			$scope.navTabButtonTextColor4 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 5
	$scope.navTabIsHidden5 = false;
	$scope.navTabButtonText5 = "remove";
	$scope.navTabButtonTextColor5 = "btn-danger";
	
	$scope.navTabText5 = "Other";
	$scope.navTabHyperlink5 = "http://www.ebay.com";
	
	$scope.ShowHideNavigationTab5 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.navTabIsHidden5 = $scope.navTabIsHidden5 ? false : true;
		if($scope.navTabIsHidden5 == true){
			$scope.navTabButtonText5 = "Add";
			$scope.navTabButtonTextColor5 = "btn-success";

		}else{
			$scope.navTabButtonText5  = "Remove";
			$scope.navTabButtonTextColor5 = "btn-danger";
		}
	}
	//NAVIGATION BAR END
	
	//IMAGE CAROUSEL
	$scope.productImage1 = "https://wallpaperscraft.com/image/iphone_5_iphone_apple_106552_1920x1080.jpg";
	$scope.productImage2 = "https://wallpaperscraft.com/image/iphone_5_iphone_apple_106552_1920x1080.jpg";
	$scope.productImage3 = "https://wallpaperscraft.com/image/iphone_5_iphone_apple_106552_1920x1080.jpg";
	$scope.productImage4 = "https://wallpaperscraft.com/image/iphone_5_iphone_apple_106552_1920x1080.jpg";
	$scope.productImage5 = "https://wallpaperscraft.com/image/iphone_5_iphone_apple_106552_1920x1080.jpg";
	
	$scope.carouselIsHidden = false;
	$scope.carouselButtonText = "Remove Carousel";
	$scope.carouselButtonTextColor = "btn-danger";
	$scope.ShowHideCarousel = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.carouselIsHidden = $scope.carouselIsHidden ? false : true;
		if($scope.carouselIsHidden == true){
			$scope.carouselButtonText = "Add Carousel";
			$scope.carouselButtonTextColor = "btn-success";

		}else{
			$scope.carouselButtonText  = "Remove Carousel";
			$scope.carouselButtonTextColor = "btn-danger";
		}
	}

	//PRODUCT NAME
	$scope.productNameIsHidden = false;
	$scope.productNameText = "Product Name";
	$scope.productNamebuttonText = "remove";
	$scope.productNamebuttonTextColor = "btn-danger";
	$scope.ShowHideProductName = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.productNameIsHidden = $scope.productNameIsHidden ? false : true;
		if($scope.productNameIsHidden == true){
			$scope.productNamebuttonText = "Add";
			$scope.productNamebuttonTextColor = "btn-success";
		}else{
			$scope.productNamebuttonText = "Remove";
			$scope.productNamebuttonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT DESCRIPTION
	$scope.productDesIsHidden = false;
	$scope.productDesText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis ipsum, consectetur nec pretium ac, dignissim in lorem. Cras 		scelerisque interdum erat, et tristique magna rutrum non. Pellentesque laoreet purus quam, id tempor diam gravida at. Mauris est nisl, eleifend eget ante et, 	vulputate ultricies mauris. Suspendisse molestie nec nibh sit amet pellentesque.";
	$scope.productDesbuttonText = "remove";
	$scope.productDesbuttonTextColor = "btn-danger";
	$scope.ShowHideProductDes = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.productDesIsHidden = $scope.productDesIsHidden ? false : true;
		if($scope.productDesIsHidden == true){
			$scope.productDesbuttonText = "Add";
			$scope.productDesbuttonTextColor = "btn-success";
		}else{
			$scope.productDesbuttonText = "Remove";
			$scope.productDesbuttonTextColor = "btn-danger";
		}
	}
	//PRODUCT FEATURES PRODUCT FEATURES PRODUCT FEATURES
	$scope.featuresIsHidden = false;
	$scope.featuresButtonText = "Remove Features Panel";
	$scope.featuresButtonTextColor = "btn-danger";
	
	$scope.ShowHidefeatures = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.featuresIsHidden = $scope.featuresIsHidden ? false : true;
		if($scope.featuresIsHidden == true){
			$scope.featuresButtonText = "Add Features Panel";
			$scope.featuresButtonTextColor = "btn-success";
		}else{
			$scope.featuresButtonText = "Remove Features Panel";
			$scope.featuresButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 1
	$scope.feature1IsHidden = false;
	$scope.feature1ButtonText = "Remove";
	$scope.feature1ButtonTextColor = "btn-danger";
	$scope.feature1 = "Feature ONE"
	
	$scope.ShowHidefeature1 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature1IsHidden = $scope.feature1IsHidden ? false : true;
		if($scope.feature1IsHidden == true){
			$scope.feature1ButtonText = "Add";
			$scope.feature1ButtonTextColor = "btn-success";
		}else{
			$scope.feature1ButtonText = "Remove";
			$scope.feature1ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 2
	$scope.feature2IsHidden = false;
	$scope.feature2ButtonText = "Remove";
	$scope.feature2ButtonTextColor = "btn-danger";
	$scope.feature2 = "Feature TWO"
	
	$scope.ShowHidefeature2 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature2IsHidden = $scope.feature2IsHidden ? false : true;
		if($scope.feature2IsHidden == true){
			$scope.feature2ButtonText = "Add";
			$scope.feature2ButtonTextColor = "btn-success";
		}else{
			$scope.feature2ButtonText = "Remove";
			$scope.feature2ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 3
	$scope.feature3IsHidden = false;
	$scope.feature3ButtonText = "Remove";
	$scope.feature3ButtonTextColor = "btn-danger";
	$scope.feature3 = "Feature THREE"
	
	$scope.ShowHidefeature3 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature3IsHidden = $scope.feature3IsHidden ? false : true;
		if($scope.feature3IsHidden == true){
			$scope.feature3ButtonText = "Add";
			$scope.feature3ButtonTextColor = "btn-success";
		}else{
			$scope.feature3ButtonText = "Remove";
			$scope.feature3ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 4
	$scope.feature4IsHidden = false;
	$scope.feature4ButtonText = "Remove";
	$scope.feature4ButtonTextColor = "btn-danger";
	$scope.feature4 = "Feature FOUR"
	
	$scope.ShowHidefeature4 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature4IsHidden = $scope.feature4IsHidden ? false : true;
		if($scope.feature4IsHidden == true){
			$scope.feature4ButtonText = "Add";
			$scope.feature4ButtonTextColor = "btn-success";
		}else{
			$scope.feature4ButtonText = "Remove";
			$scope.feature4ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 5
	$scope.feature5IsHidden = false;
	$scope.feature5ButtonText = "Remove";
	$scope.feature5ButtonTextColor = "btn-danger";
	$scope.feature5 = "Feature FIVE"
	
	$scope.ShowHidefeature5 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature5IsHidden = $scope.feature5IsHidden ? false : true;
		if($scope.feature5IsHidden == true){
			$scope.feature5ButtonText = "Add";
			$scope.feature5ButtonTextColor = "btn-success";
		}else{
			$scope.feature5ButtonText = "Remove";
			$scope.feature5ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 6
	$scope.feature6IsHidden = false;
	$scope.feature6ButtonText = "Remove";
	$scope.feature6ButtonTextColor = "btn-danger";
	$scope.feature6 = "Feature SIX"
	
	$scope.ShowHidefeature6 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature6IsHidden = $scope.feature6IsHidden ? false : true;
		if($scope.feature6IsHidden == true){
			$scope.feature6ButtonText = "Add";
			$scope.feature6ButtonTextColor = "btn-success";
		}else{
			$scope.feature6ButtonText = "Remove";
			$scope.feature6ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 1
	$scope.feature7IsHidden = false;
	$scope.feature7ButtonText = "Remove";
	$scope.feature7ButtonTextColor = "btn-danger";
	$scope.feature7 = "Feature SEVEN"
	
	$scope.ShowHidefeature7 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature7IsHidden = $scope.feature7IsHidden ? false : true;
		if($scope.feature7IsHidden == true){
			$scope.feature7ButtonText = "Add";
			$scope.feature7ButtonTextColor = "btn-success";
		}else{
			$scope.feature7ButtonText = "Remove";
			$scope.feature7ButtonTextColor = "btn-danger";
		}
	}
	
	//PRODUCT FEATURE 8
	$scope.feature8IsHidden = false;
	$scope.feature8ButtonText = "Remove";
	$scope.feature8ButtonTextColor = "btn-danger";
	$scope.feature8 = "Feature EIGHT"
	
	$scope.ShowHidefeature8 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feature8IsHidden = $scope.feature8IsHidden ? false : true;
		if($scope.feature8IsHidden == true){
			$scope.feature8ButtonText = "Add";
			$scope.feature8ButtonTextColor = "btn-success";
		}else{
			$scope.feature8ButtonText = "Remove";
			$scope.feature8ButtonTextColor = "btn-danger";
		}
	}
	//PRODUCT FEATURES END PRODUCT FEATURES END PRODUCT FEATURES END
	
	//WHAT IS IN THE BOX
	$scope.WhatInIsHidden = false;
	$scope.WhatInText = "Description of the items included with purchase.";
	$scope.WhatInbuttonText = "remove";
	$scope.WhatInbuttonTextColor = "btn-danger";
	$scope.ShowHideWhatIn = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.WhatInIsHidden = $scope.WhatInIsHidden ? false : true;
		if($scope.WhatInIsHidden == true){
			$scope.WhatInbuttonText = "Add";
			$scope.WhatInbuttonTextColor = "btn-success";
		}else{
			$scope.WhatInbuttonText = "Remove";
			$scope.WhatInbuttonTextColor = "btn-danger";
		}
	}
	
	//NAVIGATION BAR NAVIGATION BAR NAVIGATION BAR NAVIGATION BAR
	$scope.shopIsHidden = false;
	$scope.shopButtonText = "Remove Shop Panel";
	$scope.shopButtonTextColor = "btn-danger";
	
	$scope.ShowHideShop = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopIsHidden = $scope.shopIsHidden ? false : true;
		if($scope.shopIsHidden == true){
			$scope.shopButtonText = "Add Shop Panel";
			$scope.shopButtonTextColor = "btn-success";
		}else{
			$scope.shopButtonText = "Remove Shop Panel";
			$scope.shopButtonTextColor = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 1
	$scope.shopTabIsHidden1 = false;
	$scope.shopTabButtonText1 = "remove";
	$scope.shopTabButtonTextColor1 = "btn-danger";
	
	$scope.shopTabText1 = "Home";
	$scope.shopTabHyperlink1 = "http://www.ebay.com";
	
	$scope.ShowHideShopTab1 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopTabIsHidden1 = $scope.shopTabIsHidden1 ? false : true;
		if($scope.shopTabIsHidden1 == true){
			$scope.shopTabButtonText1 = "Add";
			$scope.shopTabButtonTextColor1 = "btn-success";

		}else{
			$scope.shopTabButtonText1  = "Remove";
			$scope.shopTabButtonTextColor1 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 1
	$scope.shopTabIsHidden2 = false;
	$scope.shopTabButtonText2 = "remove";
	$scope.shopTabButtonTextColor2 = "btn-danger";
	
	$scope.shopTabText2 = "Tab 2";
	$scope.shopTabHyperlink2 = "http://www.ebay.com";
	
	$scope.ShowHideShopTab2 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopTabIsHidden2 = $scope.shopTabIsHidden2 ? false : true;
		if($scope.shopTabIsHidden2 == true){
			$scope.shopTabButtonText2 = "Add";
			$scope.shopTabButtonTextColor2 = "btn-success";

		}else{
			$scope.shopTabButtonText2  = "Remove";
			$scope.shopTabButtonTextColor2 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 3
	$scope.shopTabIsHidden3 = false;
	$scope.shopTabButtonText3 = "remove";
	$scope.shopTabButtonTextColor3 = "btn-danger";
	
	$scope.shopTabText3 = "Tab 3";
	$scope.shopTabHyperlink3 = "http://www.ebay.com";
	
	$scope.ShowHidesShopTab3 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopTabIsHidden3 = $scope.shopTabIsHidden3 ? false : true;
		if($scope.shopTabIsHidden3 == true){
			$scope.shopTabButtonText3 = "Add";
			$scope.shopTabButtonTextColor3 = "btn-success";

		}else{
			$scope.shopTabButtonText3  = "Remove";
			$scope.shopTabButtonTextColor3 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 4
	$scope.shopTabIsHidden4 = false;
	$scope.shopTabButtonText4 = "remove";
	$scope.shopTabButtonTextColor4 = "btn-danger";
	
	$scope.shopTabText4 = "Tab 4";
	$scope.shopTabHyperlink4 = "http://www.ebay.com";
	
	$scope.ShowHideShopTab4 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopTabIsHidden4 = $scope.shopTabIsHidden4 ? false : true;
		if($scope.shopTabIsHidden4 == true){
			$scope.shopTabButtonText4 = "Add";
			$scope.shopTabButtonTextColor4 = "btn-success";

		}else{
			$scope.shopTabButtonText4  = "Remove";
			$scope.shopTabButtonTextColor4 = "btn-danger";
		}
	}
	
	//NAVIGATION TAB 5
	$scope.shopTabIsHidden5 = false;
	$scope.shopTabButtonText5 = "remove";
	$scope.shopTabButtonTextColor5 = "btn-danger";
	
	$scope.shopTabText5 = "Tab 5";
	$scope.shopTabHyperlink5 = "http://www.ebay.com";
	
	$scope.ShowHideShopTab5 = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shopTabIsHidden5 = $scope.shopTabIsHidden5 ? false : true;
		if($scope.shopTabIsHidden5 == true){
			$scope.shopTabButtonText5 = "Add";
			$scope.shopTabButtonTextColor5 = "btn-success";

		}else{
			$scope.shopTabButtonText5  = "Remove";
			$scope.shopTabButtonTextColor5 = "btn-danger";
		}
	}
	//NAVIGATION BAR END
	
	//PAYMENT POLICY
	$scope.payIsHidden = false;
	$scope.payDescription = "We accept Paypal, Bank transfer, Cash on delivery an Credit Card.";
	$scope.payPhotoLink = "http://www.kamlegit.co.uk/images/payments/paypal-logo-small.png";
	$scope.payInbuttonText = "remove";
	$scope.payInbuttonTextColor = "btn-danger";
	$scope.ShowHidePayment = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.payIsHidden = $scope.payIsHidden ? false : true;
		if($scope.payIsHidden == true){
			$scope.payInbuttonText = "Add";
			$scope.payInbuttonTextColor = "btn-success";
		}else{
			$scope.payInbuttonText = "Remove";
			$scope.payInbuttonTextColor = "btn-danger";
		}
	}
	
	//SHIPPING POLICY
	$scope.shipIsHidden = false;
	$scope.shipDescription = "USPS Priority Mail";
	$scope.shipPhotoLink = "http://www.manilaforwarder.com/images/uspsbox.png";
	$scope.shipInbuttonText = "remove";
	$scope.shipInbuttonTextColor = "btn-danger";
	$scope.ShowHideShipping = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.shipIsHidden = $scope.shipIsHidden ? false : true;
		if($scope.shipIsHidden == true){
			$scope.shipInbuttonText = "Add";
			$scope.shipInbuttonTextColor = "btn-success";
		}else{
			$scope.shipInbuttonText = "Remove";
			$scope.shipInbuttonTextColor = "btn-danger";
		}
	}
	
	//RETURN POLICY
	$scope.returnIsHidden = false;
	$scope.returnDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis ipsum, consectetur nec pretium ac, dignissim in lorem. Cras 								scelerisque interdum erat, et tristique magna rutrum non.";
	$scope.returnPhotoLink = "https://www.foldandgowheelchairs.com/wp-content/uploads/2015/08/30dayreturnpolicy-2-.png";
	$scope.returnInbuttonText = "remove";
	$scope.returnInbuttonTextColor = "btn-danger";
	$scope.ShowHideReturn = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.returnIsHidden = $scope.returnIsHidden ? false : true;
		if($scope.returnIsHidden == true){
			$scope.returnInbuttonText = "Add";
			$scope.returnInbuttonTextColor = "btn-success";
		}else{
			$scope.returnInbuttonText = "Remove";
			$scope.returnInbuttonTextColor = "btn-danger";
		}
	}
	
	//FEEDBACK POLICY
	$scope.feedbackIsHidden = false;
	$scope.feedbackDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis ipsum, consectetur nec pretium ac, dignissim in lorem. Cras 								scelerisque interdum erat, et tristique magna rutrum non. Pellentesque laoreet purus quam, id tempor diam gravida at. Mauris est 									nisl, eleifend eget ante et, vulputate ultricies mauris. Suspendisse molestie nec";
	$scope.feedbackPhotoLink = "http://www.pngall.com/wp-content/uploads/2016/05/Feedback.png";
	$scope.feedbackInbuttonText = "remove";
	$scope.feedbackInbuttonTextColor = "btn-danger";
	$scope.ShowHideFeedback = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.feedbackIsHidden = $scope.feedbackIsHidden ? false : true;
		if($scope.feedbackIsHidden == true){
			$scope.feedbackInbuttonText = "Add";
			$scope.feedbackInbuttonTextColor = "btn-success";
		}else{
			$scope.feedbackInbuttonText = "Remove";
			$scope.feedbackInbuttonTextColor = "btn-danger";
		}
	}
	
	//CONTACT
	$scope.contactIsHidden = false;
	$scope.contactDescription = "Contact us for more information.";
	$scope.contactPhotoLink = "https://static1.squarespace.com/static/55facf72e4b08c2cd5dddb74/t/56165769e4b089e89950396d/1444304747212/28_Contact-Us.png?format=2500w";
	$scope.conatactInbuttonText = "remove";
	$scope.contactInbuttonTextColor = "btn-danger";
	$scope.ShowHideContact = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.contactIsHidden = $scope.contactIsHidden ? false : true;
		if($scope.contactIsHidden == true){
			$scope.conatactInbuttonText = "Add";
			$scope.contactInbuttonTextColor = "btn-success";
		}else{
			$scope.conatactInbuttonText = "Remove";
			$scope.contactInbuttonTextColor = "btn-danger";
		}
	}
	
	//FOOTER
	$scope.footerIsHidden = false;
	$scope.footertbuttonText = "remove";
	$scope.footerbuttonTextColor = "btn-danger";
	$scope.ShowHideFooter = function () {
		//If DIV is hidden it will be visible and vice versa.
		$scope.footerIsHidden = $scope.footerIsHidden ? false : true;
		if($scope.footerIsHidden == true){
			$scope.footertbuttonText = "Add";
			$scope.footerbuttonTextColor = "btn-success";
		}else{
			$scope.footertbuttonText = "Remove";
			$scope.footerbuttonTextColor = "btn-danger";
		}
	}

});
