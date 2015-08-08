var commonApp= angular.module('commonApp', ["requestModule"]);


commonApp.controller("loginController",function($scope,$http,$location,requestHandler){

	//Login Function
	$scope.login=function(){
		requestHandler.loginRequest();
	};

	//Get Role Method
	$scope.getUserRole=function(){
		requestHandler.getRequest("getCurrentUserRole.json","");
	};

});