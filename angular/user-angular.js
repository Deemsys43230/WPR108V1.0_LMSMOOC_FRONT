

var sampleUser = angular.module('user', []);
//directive for ngblur
sampleUser.directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);


//Define Routing for app

sampleUser.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.
            when('/index', {
                templateUrl: 'startup.html'
            }).
            when('/login', {
                templateUrl: 'login.html'
            }).
            when('/register', {
                templateUrl: 'register.html',
                 controller: 'saveUserDetails'
            }).
            when('/create_account', {
                templateUrl: 'create_account.html',
                controller:'saveUserDetails'
            }).
            when('/offer_zone', {
                templateUrl: 'offer_zone.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);

sampleUser.controller('saveUserDetails', function($scope,$http,$location,$route,$rootScope,sharedProperties) {

 $scope.userDetailForm=sharedProperties .getProperty();

 $scope.onBlur = function() {
   
    $http.post('http://localhost:8080/Learnterest/isNewUser.json', $scope.userDetailsForm).then(function (results) {
         if (!results.data.isNewUser) {
            $scope.alreadyexist= "This email is already in use";
         }
         else{
             $scope.alreadyexist= "";
         }
    });
}
 $scope.creatUser=function(){
  $http.post('http://localhost:8080/Learnterest/saveUserDetails.json', $scope.userDetailsForm).then(function (results) {
    
          $scope.userDetailForm=results.data.userDetailsForm;
          sharedProperties.setProperty(results.data.userDetailsForm);
          $location.path('/create_account');
    });

}

 $scope.updateUserDetails=function(){
  $http.post('http://localhost:8080/Learnterest/updateUserDetails.json', $scope.userDetailForm).then(function (results) {
          
          $location.path('/login');
    });

};
});


//Services
sampleUser.service('sharedProperties', function () {
        var property = 'First';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });