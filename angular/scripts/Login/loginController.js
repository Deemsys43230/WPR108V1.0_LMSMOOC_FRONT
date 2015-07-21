//Module Creation
var loginApp = angular.module('indexApp', ['authModule','requestModule','ngRoute','roleModule']);


// Compare Confirm Password
loginApp.directive('compareTo',function() {
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
                templateUrl: 'login.html',
                controller: 'loginController'
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
            when('/logout',{
              templateUrl:'login.html',
              controller:'logoutController'
            }).
            when('/authError',{
              templateUrl:'error.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);

//Role Authentication
loginApp.run(['$rootScope','roleFactory','$location','authFactory','$cookieStore', function($rootScope,roleFactory,$location,authFactory,$cookieStore) {
$rootScope.$on("$routeChangeStart", function(event, next, current) {
var nextURL = next.originalPath;

if (nextURL == "/logout") {
  //Remove Oauth and Role from Cookies if logout
   $cookieStore.remove('userObj');
   $cookieStore.remove('roleId');
};

if(authFactory.getRole() == undefined){
  nextURL = ''+nextURL;
}
else if(authFactory.getRole().userRole == "1"){
  nextURL = 'superadmin'+nextURL;
}
else{
nextURL = 'users'+nextURL;
}
    if(!roleFactory.isUrlAccessibleForUser(nextURL))
    $location.path('/authError');
});
}]);

//Declare Login Page Controller
loginApp.controller('saveUserDetails', function($scope,$http,$location,userDetailService,requestHandler) {

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
 $scope.creatUser=function(){

 	//Operation After clicked create account
     requestHandler.postRequest("saveUserDetails.json",$scope.userDetailsForm,0).then(function(results){
         userDetailService.setUserDetailsForm(results.data.userDetailsForm);
          $location.path('/create_account');
    });

}

});


//Account Detail Controller
loginApp.controller('userDetailController', function($scope,$http,$location,userDetailService,requestHandler) {

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
          $location.path('/login');
    });

};

});


loginApp.controller("loginController",function($window,$scope,$location,authFactory,oAuthFactory,requestHandler,$cookieStore){

  $scope.login=function()
  {
    $scope.loginError="";
    console.log("Username: "+$scope.loginDetail.emailAddress+",Password:"+$scope.loginDetail.password);
   oAuthFactory.requestLogin($scope.loginDetail.emailAddress,$scope.loginDetail.password).success(function(results){
    if(authFactory.isAuthenticated())
    {
      //set role in cookies
      oAuthFactory.requestRole("getUserRole.json",$scope.loginDetail).then(function(results){
        if(results.data.userRole == "1"){
          $window.location.href = 'superadmin/';
        }
        else{
        $window.location.href = 'users/';
        }
      });
        
    }
    else
    {
      $scope.loginError="Tokem Expired";
    }
  }).error(function(){
     $scope.loginError="Please check your email and password.";
     $location.path('/login');
  });  
  };

});

//logoutController
loginApp.controller("logoutController",function($window,$scope,$location,authFactory,oAuthFactory,requestHandler,$cookieStore){

  //Remove Oauth and Role from Cookies
   $cookieStore.remove('userObj');
   $cookieStore.remove('roleId');

   $scope.login=function()
  {
    $scope.loginError="";
    console.log("Username: "+$scope.loginDetail.emailAddress+",Password:"+$scope.loginDetail.password);
   oAuthFactory.requestLogin($scope.loginDetail.emailAddress,$scope.loginDetail.password).success(function(results){
    if(authFactory.isAuthenticated())
    {
      //set role in cookies
      oAuthFactory.requestRole("getUserRole.json",$scope.loginDetail).then(function(results){
        if(results.data.userRole == "1"){
          $window.location.href = 'superadmin/';
        }
        else{
        $window.location.href = 'users/';
        }
      });
        
    }
    else
    {
      $scope.loginError="Tokem Expired";
    }
  }).error(function(){
     $scope.loginError="Please check your email and password.";
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

//Service
loginApp.service('roleService', function() {
  this.userRole = null;

  this.setuserRole = function(role) {
        this.role = role;
  };

  this.getuserRole = function() {
        return this.role;
  };

});