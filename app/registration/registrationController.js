var registerApp= angular.module('commonApp', ["requestModule"]);

registerApp.controller("registrationController",function($scope,$http,$location,userDetailService,requestHandler){
    $scope.isValid=false;
    
    //Check for Email Already Exists
    $scope.checkEmail = function() {

        if($scope.userDetailsForm.emailAddress!="")
        {
            requestHandler.postRequest("isNewUser.json",$scope.userDetailsForm,0).then(function(results){
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
    $scope.createUser=function (){
        //Operation After clicked create account
        alert("hit createUser");
        requestHandler.postRequest("saveUserDetails.json",$scope.userDetailsForm,0).then(function(results){
            var date = new Date();
            var year=date.getFullYear();
            year = year-25;
            var dob = '01' + '/' + '01' + '/' + year;
            results.data.userDetailsForm.dateOfBirth=dob;
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
