var commonApp= angular.module('commonApp', ["requestModule",'ngCookies']);


commonApp.controller("loginController",function($cookies,$scope,$http,$location,$window,requestHandler,userDetailService,successMessageService){

	$scope.errorMessage=successMessageService.getMessage();
	$scope.success=successMessageService.getIsSuccess();
	$scope.fail=successMessageService.getIsFail();

	successMessageService.reset();
	
	//Login Function
	$scope.login=function(){
		requestHandler.loginRequest($scope.loginDetail.email,$scope.loginDetail.password).then(function(response){
			if(response.status==200){
				$cookies.put('authToken',response.data.access_token,{path:'/Learnterest'});
				$cookies.put('expires_in',response.data.expires_in,{path:'/Learnterest'});
				$cookies.put('token_type',response.data.token_type,{path:'/Learnterest'});
				requestHandler.getRequest("getCurrentUserRole.json","").then(function(response){

					if(response.data.userRole=="ROLE_USER")
						$window.location.href='../user/';
					else if(response.data.userRole=="ROLE_ADMIN")
						$window.location.href='../superadmin/';
				});

			}
			else if(response.status==400){
				$scope.loginError=response.data.error_description;
			}


		});
	};

	//Get Role Method
	$scope.getUserRole=function(){
		requestHandler.getRequest("getCurrentUserRole.json","");
	};

	//Change Password
	$scope.changeUserPassword=function(){
		requestHandler.postRequest("checkPassword.json",1234,"");
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

