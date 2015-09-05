
var userApp= angular.module('userApp', ["requestModule"]);


userApp.controller("profileController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doProfileEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
        alert("success");
        });
    }

});

userApp.controller("primaryInfoController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doPrimaryInfoEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
        alert("success");
        });
    }

});

userApp.controller("paymentController",function($scope,$http,$location,$window,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doPaymentIdEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
        alert("success");
        });
    }

});