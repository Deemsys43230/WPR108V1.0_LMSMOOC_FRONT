var changePasswordApp= angular.module('userApp', ["requestModule","flash","ngAnimate"]);


changePasswordApp.controller("changePasswordController",function($scope,$http,$location,$window,requestHandler,Flash,$route){

    $scope.doChangePassword= function () {
        var sendRequest=requestHandler.postRequest("User/changePassword.json?password="+$scope.newPassword,"");

        sendRequest.then(function(){
            Flash.create('success', 'Password changed successfully!');
            $route.reload();
        });
    }

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
        if(isPasswordCorrect==1)
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
                    var sendRequest=requestHandler.postRequest("User/checkOldPassword.json?password="+modelValue,"").then(function(results){
                        if (CheckPassword(results.data.checkPassword)){
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
