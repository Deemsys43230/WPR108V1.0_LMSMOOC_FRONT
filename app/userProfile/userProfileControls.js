
var userApp= angular.module('userApp', ["requestModule"]);


userApp.controller("profileController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });


    $scope.doChangePassword= function () {
        var sendRequest=requestHandler.postRequest("User/changePassword.json?password="+$scope.newPassword,"");

        sendRequest.then(function(){
            $scope.message="Your Password Changes Successfully!"
            $scope.success=true;
        });
    }

});

userApp.controller("primaryInfoController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doChangePassword= function () {
        var sendRequest=requestHandler.postRequest("User/changePassword.json?password="+$scope.newPassword,"");

        sendRequest.then(function(){
            $scope.message="Your Password Changes Successfully!"
            $scope.success=true;
        });
    }

});

userApp.controller("paymentController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });


    $scope.doChangePassword= function () {
        var sendRequest=requestHandler.postRequest("User/changePassword.json?password="+$scope.newPassword,"");

        sendRequest.then(function(){
            $scope.message="Your Password Changes Successfully!"
            $scope.success=true;
        });
    }

});