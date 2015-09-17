
var userApp= angular.module('userApp', ["requestModule","flash","ngAnimate"]);

var orginalUserDetails;

userApp.controller("profileController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
        orginalUserDetails=angular.copy($scope.userDetails);
    });

    $scope.doProfileEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            $("html, body").animate({
                scrollTop: 0
            }, 300);
            Flash.create('success', 'Profile updated successfully!');
        });

    }

    $scope.isClean=function(){
        return angular.equals(orginalUserDetails,$scope.userDetails);
    }

    $scope.changeProfileImage=function (){
        var imageData = $('.image-editor').cropit('export');
        console.log(imageData);
        requestHandler.postRequest("User/uploadProfileImage.json",imageData).then(function(result){
            if(result.data.fileUpload){
                $("html, body").animate({
                    scrollTop: 0
                }, 300);
                Flash.create('success', 'Profile Image updated successfully!');
            }
            else{
                $("html, body").animate({
                    scrollTop: 0
                }, 300);
                Flash.create('danger', 'Upload Image!');
            }
        });
    }
});

userApp.controller("primaryInfoController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
        orginalUserDetails=angular.copy($scope.userDetails);
    });

    $scope.doPrimaryInfoEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            $("html, body").animate({
                scrollTop: 0
            }, 300);
            Flash.create('success', 'Primary Info updated successfully!');
        });
    }

    $scope.isClean=function(){
        return angular.equals(orginalUserDetails,$scope.userDetails);
    }

});

userApp.controller("paymentController",function($scope,$http,$location,$window,requestHandler,Flash){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
        orginalUserDetails=angular.copy($scope.userDetails);
    });

    $scope.doPaymentIdEdit= function () {
        var sendRequest=requestHandler.postRequest("User/updateUserDetails.json",$scope.userDetails,0).then(function(results){
            Flash.create('success', 'Payment Details updated successfully!');
        });
    }

    $scope.isClean=function(){
        return angular.equals(orginalUserDetails,$scope.userDetails);
    }

});

userApp.controller("viewProfileController",function($scope,requestHandler){

    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetails=result.data.userDetailsForm;
    });

});



