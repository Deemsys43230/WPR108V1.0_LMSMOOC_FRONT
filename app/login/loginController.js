var commonApp= angular.module('commonApp', ["requestModule"]);


commonApp.controller("loginController",function($scope,requestHandler,successMessageService){

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

});

