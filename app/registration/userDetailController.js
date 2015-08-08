var userDetailsApp= angular.module('commonApp', ["requestModule"]);

userDetailsApp.controller("userDetailController",function($scope,$http,$location,userDetailService,requestHandler){
    if(userDetailService.getUserDetailsForm()!=null)
    {
        $scope.userDetailsForm=userDetailService.getUserDetailsForm();
    }
    else
    {
        $location.path('/login');
    }

//Enrich the Account Profile
    $scope.updateUserDetails=function(){
        requestHandler.postRequest("updateUserDetails.json",$scope.userDetailsForm,0).then(function(results){
            userDetailService.setUserDetailsForm(null);
            $location.path('/user-registration-success');
        });

    };
});