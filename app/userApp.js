var userApp= angular.module('userApp', ['ngRoute','oc.lazyLoad','requestModule']);

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
            otherwise({
                redirectTo: '/'
            });
}]);

userApp.controller('logoutController',function($scope,$window,requestHandler){
    $scope.logout = function(){
        alert("calling");
        console.log("hit login controller");
        requestHandler.getRequest("/api/j_spring_security_logout","");
        $window.location.href = '../common';
    };
});