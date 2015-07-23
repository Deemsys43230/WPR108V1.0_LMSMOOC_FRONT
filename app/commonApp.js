var commonApp= angular.module('commonApp', ['ngRoute','oc.lazyLoad']);

commonApp.config(['$routeProvider','$ocLazyLoadProvider',

    function($routeProvider,$ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        $routeProvider.
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../app/login/loginController.js'
                            ]
                        })
                    }
                }
            }).
            when('/register', {
                templateUrl: 'views/register.html',
                controller: 'registrationController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../app/registration/registrationController.js'
                            ]
                        })
                    }
                }
            }).
            when('/create_account', {
                templateUrl: 'views/create_account.html',
                controller: 'userDetailController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'indexApp',
                            files:[
                                '../../plugin/check_radio/skins/square/aero.css',
                                '../../css/check-radio.css',
                                '../../plugin/date-picker/pikaday.css',
                                '../../js/jquery-ui-1.8.12.min.js',
                                '../../js/jquery.validate.js',
                                '../../plugin/check_radio/jquery.icheck.js',
                                '../../plugin/date-picker/pikaday.js'
                            ]
                        })
                    }
                }

            }).
            otherwise({
                redirectTo: '/login'
            });
        }

       ]);
