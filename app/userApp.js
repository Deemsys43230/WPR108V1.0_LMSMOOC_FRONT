var userApp= angular.module('userApp', ['ngRoute','oc.lazyLoad','requestModule','ngCookies','flash', 'ngAnimate']);

userApp.config(['$routeProvider','$ocLazyLoadProvider','$httpProvider',

    function($routeProvider,$ocLazyLoadProvider,$httpProvider) {
        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        //Do For Cross Orgin Login Management
        $httpProvider.defaults.withCredentials = true;

        $httpProvider.interceptors.push(['$q','$location','$injector','$cookies',function ($q, $location,$injector,$cookies,$window) {

            return {
                'request': function(request) {

                    if($cookies.get('authToken')){
                        request.headers.Authorization='bearer'+" "+$cookies.get('authToken');
                    }
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
                        case 0:{
                            $location.path('/401');
                            break;
                        }
                        case 403: {
                            $location.path('/401');
                            break;
                        }
                        case 500: {
                            break;
                        }
                        default : {
                            break;
                        }
                    }

                }
            };
        }]);

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
            when('/offer_zone', {
                templateUrl: '../common/views/offer_zone.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
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
                templateUrl: '../common/views/news_events.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/news_detail', {
                templateUrl: '../common/views/news_detail.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../js/jquery-social.min.js',
                                '../../js/jquery-socialmedia.js'
                            ]
                        })
                    }
                }
            }).
            when('/blog', {
                templateUrl: '../common/views/blog.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/blog_post', {
                templateUrl: '../common/views/blog_post.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/profile_edit', {
                templateUrl: 'views/profile_edit.html',
                controller:'profileController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../app/userProfile/userProfileControls.js',
                                '../../js/jquery.simplyCountable.js',
                                '../../css/profile-image-upload.css',
                                '../../js/image-upload.js',
                                '../../js/popup.js',
                                '../../css/popup.css'
                            ]
                        })
                    }
                }
            }).
            when('/primary_info_edit', {
                templateUrl: 'views/primary_info_edit.html',
                controller:'primaryInfoController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../app/userProfile/userProfileControls.js'
                            ]
                        })
                    }
                }
            }).
            when('/change_password', {
                templateUrl: 'views/change_password.html',
                controller:'changePasswordController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../app/changePassword/changePassword.js'
                            ]
                        })
                    }
                }
            }).
            when('/payment_edit', {
                templateUrl: 'views/payment_edit.html',
                controller:'paymentController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../app/userProfile/userProfileControls.js'
                            ]
                        })
                    }
                }
            }).
            when('/profile_view', {
                templateUrl: 'views/profile_view.html',
                controller: 'viewProfileController',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../app/userProfile/userProfileControls.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_courses', {
                templateUrl: 'views/my_courses.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../js/jquery-mouse-overlay.js'
                            ]
                        })
                    }
                }
            }).
            when('/new_course', {
                templateUrl: 'views/new_course.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/popup-delay.css',
                                '../../css/input-tag.css',
                                '../../css/video_preview.css',
                                '../../css/sidebar.css',
                                '../../plugin/video/jquery_video_upload.js',
                                '../../plugin/video/build/mediaelementplayer.min.css',
                                '../../plugin/video/build/mediaelement-and-player.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/add_section', {
                templateUrl: 'views/add_section.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../css/table-sort.css',
                                '../../js/popup.js',
                                '../../js/jquery-sortable-table.js'
                            ]
                        })
                    }
                }
            }).
            when('/add_lecture', {
                templateUrl: 'views/add_lecture.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../css/table-sort.css',
                                '../../js/popup.js',
                                '../../js/jquery-sortable-table.js'
                            ]
                        })
                    }
                }
            }).
            when('/add_new_lecture', {
                templateUrl: 'views/add_lecture_new.html',
                controller: 'addNewLecture',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../angular/scripts/loggedIn/pageRedirect.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../plugin/text-editor/text-editor-bootstarp.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.5.0/summernote.css',
                                '../../plugin/text-editor/summernote.js',
                                '../../plugin/video/jquery_video_upload.js'
                            ]
                        })
                    }
                }
            }).
            when('/edit_lecture', {
                templateUrl: 'views/add_lecture_new.html',
                controller: 'editLecture',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../angular/scripts/loggedIn/pageRedirect.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../plugin/text-editor/text-editor-bootstarp.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.5.0/summernote.css',
                                '../../plugin/text-editor/summernote.js',
                                '../../plugin/video/jquery_video_upload.js'
                            ]
                        })
                    }
                }
            }).
            when('/view-quiz', {
                templateUrl: 'views/view-quiz.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../js/popup.js'
                            ]
                        })
                    }
                }
            }).
            when('/question-list', {
                templateUrl: 'views/question-list.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../css/table-sort.css',
                                '../../js/popup.js',
                                '../../js/jquery-sortable-table.js'
                            ]
                        })
                    }
                }
            }).
            when('/add_question', {
                templateUrl: 'views/add_question.html',
                controller: 'addQuestion',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../angular/scripts/loggedIn/pageRedirect.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/check-radio.css'
                            ]
                        })
                    }
                }
            }).
            when('/edit_question', {
                templateUrl: 'views/add_question.html',
                controller: 'editQuestion',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../angular/scripts/loggedIn/pageRedirect.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/check-radio.css'
                            ]
                        })
                    }
                }
            }).
            when('/quiz_preview', {
                templateUrl: 'views/quiz_preview.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css'
                            ]
                        })
                    }
                }
            }).
            when('/add_promocode', {
                templateUrl: 'views/add_promocode.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../js/popup.js',
                                '../../css/jquery.Checkbox.css',
                                '../../plugin/date-picker/pikaday.css',
                                '../../plugin/date-picker/pikaday.js'
                            ]
                        })
                    }
                }
            }).
            when('/preview', {
                templateUrl: 'views/preview.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css',
                                '../../css/popup.css',
                                '../../js/popup.js',
                                '../../css/single_course.css'
                            ]
                        })
                    }
                }
            }).
            when('/preview_text', {
                templateUrl: 'views/preview_text.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css'
                            ]
                        })
                    }
                }
            }).
            when('/preview-video', {
                templateUrl: 'views/preview-video.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css'
                            ]
                        })
                    }
                }
            }).
            when('/preview-audio', {
                templateUrl: 'views/preview-audio.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js',
                                '../../css/sidebar.css'
                            ]
                        })
                    }
                }
            }).
            when('/help', {
                templateUrl: 'views/help.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/fileupload.css',
                                '../../js/fileupload.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_wishlist', {
                templateUrl: 'views/my_wishlist.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../js/jquery-mouse-overlay.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_students', {
                templateUrl: 'views/my_students.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_favourites', {
                templateUrl: 'views/my_favourites.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../js/jquery-mouse-overlay.js',
                                '../../css/popup.css',
                                '../../js/popup.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_messages', {
                templateUrl: 'views/my_messages.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../css/popup.css',
                                '../../js/popup.js',
                                '../../css/inbox_menu.css'
                            ]
                        })
                    }
                }
            }).
            when('/my_messages_details', {
                templateUrl: 'views/my_messages_details.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_purchase_history', {
                templateUrl: 'views/my_purchase_history.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js'
                            ]
                        })
                    }
                }
            }).
            when('/my_payment', {
                templateUrl: 'views/my_payment.html',
                resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'userApp',
                            files:[
                                '../../js/bootstrap.min.js',
                                '../../plugin/date-picker/date-picker/lib/bootstrap-datepicker.css',
                                '../../plugin/date-picker/date-picker/lib/pikaday.css',
                                '../../plugin/date-picker/date-picker/dist/jquery-timepicker.js',
                                '../../plugin/date-picker/date-picker/lib/bootstrap-datepicker.js',
                                '../../plugin/date-picker/date-picker/dist/datepair.js'
                            ]
                        })
                    }
                }
            }).
            when('/term_of_use', {
                templateUrl: '../common/views/term_of_use.html'
            }).
            when('/privacy_policy', {
                templateUrl: '../common/views/privacy_policy.html'
            }).
            when('/refund_policy', {
                templateUrl: '../common/views/refund_policy.html'
            }).
            when('/affiliate_login', {
                templateUrl: '../common/views/affiliate_login.html'
            }).
            when('/about_us', {
                templateUrl: '../common/views/about_us.html'
            }).
            when('/promocode', {
                templateUrl: '../common/views/promocode.html'
            }).
            when('/FAQ', {
                templateUrl: '../common/views/FAQ.html'
            }).
            when('/contacts', {
                templateUrl: '../common/views/contacts.html'
            }).
            when('/401', {
                templateUrl: '../common/views/401.html'
            }).
            otherwise({
                templateUrl: '../common/views/about_us.html'
            });
}]);

userApp.controller('logoutController',function($scope,$window,$cookies,requestHandler){
    $scope.logout = function(){
    
        var doLogout=requestHandler.getRequest('j_spring_security_logout?ajax=true',"");

        doLogout.then(function(response){
            $cookies.remove('authToken',{path:'/Learnterest'});
            $cookies.remove('expires_in',{path:'/Learnterest'});
            $cookies.remove('token_type',{path:'/Learnterest'});
            $window.location.href = '../common';
        });
    };
});

userApp.controller('userProfile',function($scope,requestHandler){
    requestHandler.getRequest("User/getUserDetails.json","").then(function(result){
        $scope.userDetailForm=result.data.userDetailsForm;
    });
});
