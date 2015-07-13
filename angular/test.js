'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
    .module('user', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar'
    ])
    .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('index',{
                templateUrl:'startup.html',
                url:'/index',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'user',
                            files:[
                                'js/jquery-mouse-overlay.js'
                            ]
                        })
                    }
                }
            })
            .state('login',{
                templateUrl:'login.html',
                url:'/login'
            })
            .state('register',{
                templateUrl:'register.html',
                controller: 'saveUserDetails',
                url:'/register'
            })
            .state('create_account',{
                templateUrl:'create_account.html',
                controller:'saveUserDetails',
                url:'/create_account'
            })
    }]);

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
