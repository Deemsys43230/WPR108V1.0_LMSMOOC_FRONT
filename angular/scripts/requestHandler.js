var requestHandler = angular.module('indexApp', []);

requestHandler.config(['$routeProvider',

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
                controller: 'userDetailController'
            }).
            when('/offer_zone', {
                templateUrl: 'offer_zone.html'
            }).
            when('/news_events', {
                templateUrl: 'news_events.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);


//Declare Login Page Controller
requestHandler.controller('saveUserDetails', function($scope,$http,$location,$rootScope) {

//Check for Email Already Exists
 $scope.checkEmail = function() {   

    $http.post('http://localhost:8080/Learnterest/isNewUser.json', $scope.userDetailsForm).then(function (results) {
         if (!results.data.isNewUser) {
            $scope.emailAlreadyExist= "Email ID Already Exists!";
            $scope.isValid=false;
         }
         else{
             $scope.emailAlreadyExist= "";
             $scope.isValid=true;
         }
    });

});