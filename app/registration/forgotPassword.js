var forgotPasswordApp= angular.module('commonApp', ["requestModule"]);

forgotPasswordApp.controller('forgotPasswordController',function($scope,$http,$location,$routeParams,requestHandler,successMessageService){
    var code = this;
    code = $routeParams.genCode;
    code = code.substring(9);

    requestHandler.postRequest("confirmPasswordGencode.json",code,0).then(function(results){

        if(results.data.loginDetailsForms==1){

            //Reset Password
            $scope.resetPassword=function (){

                requestHandler.postRequest("resetPassword.json?password="+$scope.password+"&passwordGencode="+code,"").then(function(results){
                    successMessageService.setMessage("You have Successfully Changed Your Password, Kindly Login now.");
                    successMessageService.setIsFail(0);
                    successMessageService.setIsSuccess(1);
                    $location.path("/login");
                });
            }
        }

        else{
            successMessageService.setMessage("Your request has been Expired, Kindly Resend the Request.");
            successMessageService.setIsFail(1);
            successMessageService.setIsSuccess(0);
            $location.path("/forgot_password");
        }
    });
         
});

forgotPasswordApp.controller('forgotPasswordRequestController',function($scope,$http,$location,requestHandler,successMessageService){
    
    $scope.errorMessage=successMessageService.getMessage();
    $scope.success=successMessageService.getIsSuccess();
    $scope.fail=successMessageService.getIsFail();
    successMessageService.reset();

    $scope.forgotPasswordRequest=function (){

        requestHandler.postRequest("forgotPassword.json",$scope.emailAddress,0);

        successMessageService.setMessage("Your Request Received Successfully! You we get the Mail Shortly, Kindly check your Email.");
        successMessageService.setIsSuccess(1);
        successMessageService.setIsFail(0);

        $location.path("/login");
    };
});

// Compare Confirm Password
forgotPasswordApp.directive('compareTo',function() {
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
forgotPasswordApp.directive("emailavailable", function ($q, $timeout,requestHandler) {
    
    var CheckEmailAvailable = function (isNew) {
        if(isNew==true)
            return false;
        else
            return true;
    };

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.emailavailable = function (modelValue) {
                var deferred = $q.defer();
                $timeout(function () {
                    var isNew; 
                    var sendRequest=requestHandler.postRequest("isNewUser.json",modelValue,0).then(function(results){
                        isNew=results.data.isNewUser;
                    });

                    sendRequest.then(function(){

                        if (CheckEmailAvailable(isNew)){
                            deferred.resolve();
                        }
                        else{
                            deferred.reject();
                        } 
                    });
                }, 10);

                return deferred.promise;
            }
        }
    };
});


//Service for exchange success message
angular.module('commonApp').service('successMessageService', function() {

    this.setMessage = function(message) {
        this.message = message;
    };

    this.getMessage = function() {
        return this.message;
    };

    this.setIsFail = function(fail) {
        this.fail = fail;
    };

    this.getIsFail = function() {
        return this.fail;
    };

    this.setIsSuccess = function(success) {
        this.success = success;
    };

    this.getIsSuccess = function() {
        return this.success;
    };

    this.reset = function(){
        this.message = null;
        this.fail = 0;
        this.success = 0;
    }

});