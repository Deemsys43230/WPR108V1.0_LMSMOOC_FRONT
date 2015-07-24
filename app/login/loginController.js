var commonApp= angular.module('commonApp', ["requestModule"]);


commonApp.controller("loginController",function($scope,$http,$location,requestHandler){

	$scope.login=function(){
		console.log("user logging in");
		requestHandler.postRequest("/api/j_spring_security_check?username=user&password=user","");

		var getRole=requestHandler.getRequest("/api/getCurrentUserRole.json","");

		getRole.then(function(result){

			if(result.data.userRole=="ROLE_USER")
			{
				alert("ok redirect");
				window.location = "../user/";
			}
		});

	};

});