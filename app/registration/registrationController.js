var registerApp= angular.module('commonApp', ["requestModule"]);

registerApp.controller("registrationController",function($scope,$http,$location,userDetailService,requestHandler){
    $scope.isValid=false;
    //Check for Email Already Exists
    $scope.checkEmail = function() {

        if($scope.userDetailsForm.emailAddress!="")
        {
            requestHandler.postRequest("/api/isNewUser.json",$scope.userDetailsForm,0).then(function(results){
                if (!results.data.isNewUser) {
                    $scope.emailAlreadyExist= "Email ID Already Exists!";
                    $scope.isValid=false;
                }
                else{
                    $scope.emailAlreadyExist= "";
                    $scope.isValid=true;
                }
            });
        }

    }

    //Create New User
    $scope.createUser=function(){
        //Operation After clicked create account

        requestHandler.postRequest("/api/saveUserDetails.json",$scope.userDetailsForm,0).then(function(results){
            userDetailService.setUserDetailsForm(results.data.userDetailsForm);
            $location.path('/create_account');
        });

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

//Own Directive for ngblur
registerApp.directive('ngBlur', ['$parse', function($parse) {
    return function(scope, element, attr) {
        var fn = $parse(attr['ngBlur']);
        element.bind('blur', function(event) {
            scope.$apply(function() {
                fn(scope, {$event:event});
            });
        });
    }
}]);

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