var commonApp= angular.module('commonApp', ["requestModule"]);


commonApp.controller("loginController",function($scope,$http,$location,$window,requestHandler,userDetailService,successMessageService){

	$scope.errorMessage=successMessageService.getMessage();
	$scope.success=successMessageService.getIsSuccess();
	$scope.fail=successMessageService.getIsFail();

	successMessageService.reset();
	
	//Login Function
	$scope.login=function(){	
		requestHandler.loginRequest();
	};

	//Get Role Method
	$scope.getUserRole=function(){
		requestHandler.getRequest("getCurrentUserRole.json","");
	};

	//Change Password
	$scope.changeUserPassword=function(){
		requestHandler.postRequest("checkPassword.json",1234,"");
	};

	//For Social Login
	$scope.fbLogin=function(){

		var userDetailsForm={};

		FB.login(function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
			    FB.api('/me',{fields: 'name,email,birthday,gender,location' }, function(response) {
			    	console.log('Good to see you, ' + response.name + '.');
			    	requestHandler.postRequest("isNewUser.json",response.email,0).then(function(results){
	        			if(results.data.isNewUser==1){

		        			var prfileImageURL = "http://graph.facebook.com/"+response.id+"/picture"
							//Split the location
							var city,state="";
							var location=response.location.name.split(", ");
							city=location[0];
							state=location[1];

							var gender;
							if(response.gender=="male")
								gender=1;
							else gender=2;

							//set user details
							userDetailsForm.fullName=response.name;
							userDetailsForm.emailAddress=response.email;
							userDetailsForm.dateOfBirth=response.birthday;
							userDetailsForm.gender=gender;
							userDetailsForm.profileImageUrl=prfileImageURL;
							userDetailsForm.city=city;
							userDetailsForm.state=state;

							userDetailService.setUserDetailsForm(userDetailsForm);

							console.log(response);

							requestHandler.postRequest("saveUserDetails.json",userDetailsForm,0).then(function(results){
				        		$location.path('../user/index.html');
				        	});
	        			}
	        			else{
	        				console.log("logged In");
	        				/*$window.location.href='http://learnterest.com/Learnterest/views/user/';*/
	        			}
	        		});
        		});

				FB.getLoginStatus(function(response) {
				  if (response.status === 'connected') {
				    // the user is logged in and has authenticated your
				    // app, and response.authResponse supplies
				    // the user's ID, a valid access token, a signed
				    // request, and the time the access token 
				    // and signed request each expire
				    var uid = response.authResponse.userID;
				    var accessToken = response.authResponse.accessToken;
				    console.log(response.authResponse);
				  } else if (response.status === 'not_authorized') {
				    // the user is logged in to Facebook, 
				    // but has not authenticated your app
				  } else {
				    // the user isn't logged in to Facebook.
				  }
				 });
			}
			else {
				console.log('User cancelled login or did not fully authorize.');
			}
 		},{scope:'user_location,email,user_birthday'});

	};

});


//Service
commonApp.service('userDetailService', function() {
    this.userDetailsForm = null;

    this.setUserDetailsForm = function(userDetailsForm) {
        this.userDetailsForm = userDetailsForm;
    };

    this.getUserDetailsForm = function() {
        return this.userDetailsForm;
    };

});

