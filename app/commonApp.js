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
                            name:'commonApp',
                            files:[
                                '../../plugin/check_radio/skins/square/aero.css',
                                '../../css/check-radio.css',
                                '../../plugin/date-picker/pikaday.css',
                                '../../js/jquery-ui-1.8.12.min.js',
                                '../../js/jquery.validate.js',
                                '../../plugin/check_radio/jquery.icheck.js',
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
                                '../../app/registration/pageRedirect.js'
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
                templateUrl: 'views/affiliate_register.html'
            }).
            when('/affiliate_account_register', {
                templateUrl: 'views/affiliate_account_register.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
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
            when('/affiliate-registration-success', {
                templateUrl: 'views/apply_send.html',
                controller: 'affiliateApply',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'commonApp',
                            files:[
                                '../../angular/scripts/Login/pageRedirect.js'
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