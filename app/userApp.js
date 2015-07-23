var userApp= angular.module('userApp', ['ngRoute','oc.lazyLoad']);

userApp.config(['$routeProvider','$ocLazyLoadProvider',

    function($routeProvider,$ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        $routeProvider.
             when('/', {
                templateUrl: 'views/course_category.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../plugin/menu/css/component.css',
                                '../../plugin/menu/js/modernizr.custom.js',
                                '../../plugin/menu/js/jquery.dlmenu.js',
                                '../../js/jquery-mouse-overlay.js'
                            ]
                        })
                    }
                }

            }).
            when('/logout', {
                templateUrl: '../common/views/login.html',
                controller: 'logoutController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../app/logout/logoutController.js'
                            ]
                        })
                    }
                }
            }).
            otherwise({
                redirectTo: '/'
            });
}]);