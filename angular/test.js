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
    .module('test', [
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
                            name:'test',
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
    }]);

    
