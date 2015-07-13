//Module Creation
var loginApp = angular.module('indexApp', []);

//Own Directive for ngblur
loginApp.directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);

loginApp.config(['$routeProvider',

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
            when('/news_detail', {
                templateUrl: 'news_detail.html'
            }).
            when('/blog', {
                templateUrl: 'blog.html'
            }).
            when('/blog_post', {
                templateUrl: 'blog_post.html'
            }).
            when('/affiliate_login', {
                templateUrl: 'affiliate_login.html'
            }).
            when('/affiliate_register', {
                templateUrl: 'affiliate_register.html'
            }).
            when('/affiliate_account_register', {
                templateUrl: 'affiliate_account_register.html'
            }).
            when('/apply_send', {
                templateUrl: 'apply_send.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);


//Declare Login Page Controller
loginApp.controller('saveUserDetails', function($scope,$http,$location,userDetailService) {

$scope.isValid=false;

//Check for Email Already Exists
 $scope.checkEmail = function() {   

 	if($scope.userDetailsForm.emailAddress!="")
 	{
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
	}

}

//Create New User
 $scope.creatUser=function(){

 	//Operation After clicked create account
  $http.post('http://localhost:8080/Learnterest/saveUserDetails.json', $scope.userDetailsForm).then(function (results) {
    
    	alert(JSON.stringify(results.data.userDetailsForm));
          userDetailService.setUserDetailsForm(results.data.userDetailsForm);
          alert(JSON.stringify(userDetailService.getUserDetailsForm()));
          $location.path('/create_account');
    });

}

});


//Account Detail Controller
loginApp.controller('userDetailController', function($scope,$http,$location,userDetailService) {

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
  $http.post('http://localhost:8080/Learnterest/updateUserDetails.json', $scope.userDetailsForm).then(function (results) {
          
          userDetailService.setUserDetailsForm(null);
          $location.path('/login');
    });

};

});


//Service
loginApp.service('userDetailService', function() {
  this.userDetailsForm = null;

  this.setUserDetailsForm = function(userDetailsForm) {
        this.userDetailsForm = userDetailsForm;
  };

  this.getUserDetailsForm = function() {
        return this.userDetailsForm;
  };

});