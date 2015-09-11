
var userApp= angular.module('userApp', ["requestModule","flash","ngAnimate"]);


userApp.controller("profileController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doProfileEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            successMessage(Flash,"Profile updated successfully");
        });

    }

});

userApp.controller("primaryInfoController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doPrimaryInfoEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            successMessage(Flash,"Primary Info updated successfully");
        });
    }

});

userApp.controller("paymentController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

    $scope.doPaymentIdEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            successMessage(Flash,"Payment Details updated successfully");
        });
    }

});

userApp.controller("viewProfileController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

});


