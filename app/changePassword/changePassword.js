var changePasswordApp= angular.module('userApp', ["requestModule"]);


changePasswordApp.controller("changePasswordController",function($scope,$http,$location,$window,requestHandler){
});

// Compare Confirm New Password
changePasswordApp.directive('compareTo',function() {
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


//Check for Password
changePasswordApp.directive("checkpassword", function ($q, $timeout,requestHandler) {

    var CheckPassword = function (isPasswordCorrect) {
        if(isPasswordCorrect==true)
            return true;
        else
            return false;
    };

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.checkpassword = function (modelValue) {
                var defer = $q.defer();
                $timeout(function () {
                    var isPasswordCorrect;
                    var sendRequest=requestHandler.postRequest("checkPassword.json",modelValue,0).then(function(results){
                        isPasswordCorrect=results.data.checkPassword;
                    });

                    sendRequest.then(function(){

                        if (CheckPassword(isPasswordCorrect)){
                            defer.resolve();
                        }
                        else{
                            defer.reject();
                        } 
                    });
                    isPasswordCorrect = false;
                }, 10);

                return defer.promise;
            }
        }
    };
});
