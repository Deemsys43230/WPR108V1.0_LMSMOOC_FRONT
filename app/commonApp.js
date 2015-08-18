var commonApp= angular.module('commonApp', ['ngRoute','oc.lazyLoad']);

commonApp.config(['$routeProvider','$ocLazyLoadProvider','$httpProvider',

    function($routeProvider,$ocLazyLoadProvider,$httpProvider) {
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        //Do For Cross Orgin Login Management
        $httpProvider.defaults.withCredentials = true;

        $httpProvider.interceptors.push(['$q','$location','$injector',function ($q, $location,$injector) {
                return {
                    'request': function(request) {

                        return request;
                    },
                    'response': function (response) {
                        return response;
                    },
                    'responseError': function (rejection) {
                        switch (rejection.status) {
                            case 400: {
                                break;
                            }
                            case 401:{
                              alert("restricted");
                            }
                            case 403: {
                              alert("yes !");
                              alert("Get out");
                                $location.path("/login");

                                break;
                            }
                            case 500: {
                                break;
                            }
                            default : {
                               

                                break;
                            }
                        }

                        return $q.reject(rejection);
                    }
                };
            }]);

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
             when('/login:verificationCode', {
                templateUrl: 'views/emailVerification.html',
                controller: 'emailController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../app/registration/emailVerification.js',
                                '../../css/ns-style-bar.css',
                                '../../js/modernizr.custom.js',
                                '../../js/classie.js',
                                '../../js/notificationFx.js'
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
                                '../../app/registration/registrationController.js',
                                '../../plugin/date-picker/moment.js'
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
                            name:'commonApp',
                            files:[
                                '../../plugin/date-picker/moment.js',
                                '../../css/check-radio.css',
                                '../../plugin/date-picker/pikaday.css',
                                '../../js/jquery-ui-1.8.12.min.js',
                                '../../js/jquery.validate.js',
                                '../../plugin/date-picker/pikaday.js',
                                '../../app/registration/userDetailController.js'

                            ]
                        })
                    }
                }

            }).
            when('/user-registration-success', {
                templateUrl: 'views/apply_send.html',
                controller: 'userApply',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../app/registration/registrationPageRedirect.js'
                            ]
                        })
                    }
                }

            }).
            when('/offer_zone', {
                templateUrl: 'views/offer_zone.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../js/js-countdown.js',
                                '../../js/popup.js',
                                '../../css/popup.css',
                                '../../js/jquery.shuffle.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/news_events', {
                templateUrl: 'views/news_events.html'
            }).
            when('/news_detail', {
                templateUrl: 'views/news_detail.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../js/jquery-social.min.js',
                                '../../js/jquery-socialmedia.js'
                            ]
                        })
                    }
                }
            }).
            when('/blog', {
                templateUrl: 'views/blog.html'
            }).
            when('/blog_post', {
                templateUrl: 'views/blog_post.html'
            }).
            when('/affiliate_login', {
                templateUrl: 'views/affiliate_login.html'
            }).
            when('/affiliate_register', {
                templateUrl: 'views/affiliate_register.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../plugin/date-picker/moment.js'
                            ]
                        })
                    }
                }
            }).
            when('/affiliate_account_register', {
                templateUrl: 'views/affiliate_account_register.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../css/check-radio.css',
                                '../../plugin/date-picker/pikaday.css',
                                '../../js/jquery-ui-1.8.12.min.js',
                                '../../js/jquery.validate.js',
                                '../../plugin/date-picker/moment.js',
                                '../../plugin/date-picker/pikaday.js'
                            ]
                        })
                    }
                }
            }).
            when('/affiliate-registration-success', {
                templateUrl: 'views/apply_send.html',
                controller: 'affiliateApply',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../app/registration/registrationPageRedirect.js'
                            ]
                        })
                    }
                }

            }).
            when('/term_of_use', {
                templateUrl: 'views/term_of_use.html'
            }).
            when('/privacy_policy', {
                templateUrl: 'views/privacy_policy.html'
            }).
            when('/refund_policy', {
                templateUrl: 'views/refund_policy.html'
            }).
            when('/about_us', {
                templateUrl: 'views/about_us.html'
            }).
            when('/promocode', {
                templateUrl: 'views/promocode.html'
            }).
            when('/FAQ', {
                templateUrl: 'views/FAQ.html'
            }).
            when('/contacts', {
                templateUrl: 'views/contacts.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                'http://maps.googleapis.com/maps/api/js?sensor=false',
                                '../../js/mapmarker_func.jquery.js'
                            ]
                        })
                    }
                }

            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);