var registerApp= angular.module('commonApp', ["requestModule"]);

registerApp.controller("registrationController",function($scope,$http,$location,userDetailService,requestHandler,successMessageService){

    $scope.errorMessage=successMessageService.getMessage();
    $scope.success=successMessageService.getIsSuccess();
    $scope.fail=successMessageService.getIsFail();

    successMessageService.reset();

    //Create New User
    $scope.createUser=function (){
        
        //Operation After clicked create account
        $scope.userDetailsForm.dateOfBirth="01/01/1990";
        requestHandler.postRequest("saveUserDetails.json",$scope.userDetailsForm,0).then(function(results){
            var date = new Date();
            var year=date.getFullYear();
            year = year-25;
            var dob = '01' + '/' + '01' + '/' + year;
            results.data.userDetailsForm.dateOfBirth=dob;
            userDetailService.setUserDetailsForm(results.data.userDetailsForm);
            $location.path('/create_account');
        });
        $scope.loading = 1;
    }

});

// Compare Confirm Password
registerApp.directive('compareTo',function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});

//Check for Email Already Exists
registerApp.directive("emailexists", function ($q, $timeout,requestHandler) {
    var CheckEmailExists = function (isNew) {
        if(isNew==true)
            return true;
        else
            return false;
    };

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.emailexists = function (modelValue) {
                var defer = $q.defer();
                $timeout(function () {
                    var isNew;
                    var sendRequest=requestHandler.postRequest("isNewUser.json",modelValue,0).then(function(results){
                        isNew=results.data.isNewUser;
                    });

                    sendRequest.then(function(){

                        if (CheckEmailExists(isNew)){
                            defer.resolve();
                        }
                        else{
                            defer.reject();
                        } 
                    });
                    isNew = false;
                }, 10);

                return defer.promise;
            }
        }
    };
});


//Service
registerApp.service('userDetailService', function() {
    this.userDetailsForm = null;

    this.setUserDetailsForm = function(userDetailsForm) {
        this.userDetailsForm = userDetailsForm;
    };

    this.getUserDetailsForm = function() {
        return this.userDetailsForm;
    };

});