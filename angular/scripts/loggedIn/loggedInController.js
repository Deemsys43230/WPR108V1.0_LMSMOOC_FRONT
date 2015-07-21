//Module Creation
var loggedinApp = angular.module('logApp', ['ngCookies','ngRoute','oc.lazyLoad']);

loggedinApp.config(['$routeProvider','$ocLazyLoadProvider',

    function($routeProvider,$ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug:false,
            events:true
        });

        $routeProvider.
            when('/index', {
                templateUrl: 'views/course_category.html',
                controller:'logoutController'
            }).
            when('/course_category', {
                templateUrl: 'views/course_category.html'
            }).
            when('/offer_zone', {
                templateUrl: 'views/offer_zone.html'
            }).
            when('/news_events', {
                templateUrl: 'views/news_events.html'
            }).
            when('/news_detail', {  
                templateUrl: 'views/news_detail.html'
            }).
            when('/blog', {
                templateUrl: 'views/blog.html'
            }).
            when('/blog_post', {
                templateUrl: 'views/blog_post.html'
            }).
            when('/profile_edit', {
                templateUrl: 'views/profile_edit.html'
            }).
            when('/primary_info_edit', {
                templateUrl: 'views/primary_info_edit.html'
            }).
            when('/account_edit', {
                templateUrl: 'views/account_edit.html'
            }).
            when('/payment_edit', {
                templateUrl: 'views/payment_edit.html'
            }).
            when('/profile_view', {
                templateUrl: 'views/profile_view.html'
            }).
            when('/my_courses', {
                templateUrl: 'views/my_courses.html'
            }).
            when('/new_course', {
                templateUrl: 'views/new_course.html'
            }).
            when('/add_section', {
                templateUrl: 'views/add_section.html'
            }).
            when('/add_lecture', {
                templateUrl: 'views/add_lecture.html'
            }).
            when('/add_lecture_new', {
                templateUrl: 'views/add_lecture_new.html'
            }).
            when('/lecture_edit', {
                templateUrl: 'views/lecture_edit.html'
            }).
            when('/view-quiz', {
                templateUrl: 'views/view-quiz.html'
            }).
            when('/question-list', {
                templateUrl: 'views/question-list.html'
            }).
            when('/add_question', {
                templateUrl: 'views/add_question.html'
            }).
            when('/edit_question', {
                templateUrl: 'views/edit_question.html'
            }).
            when('/quiz_preview', {
                templateUrl: 'views/quiz_preview.html'
            }).
            when('/add_promocode', {
                templateUrl: 'views/add_promocode.html'
            }).
            when('/preview', {
                templateUrl: 'views/preview.html'
            }).
            when('/preview_text', {
                templateUrl: 'views/preview_text.html'
            }).
            when('/preview-video', {
                templateUrl: 'views/preview-video.html'
            }).
            when('/preview-audio', {
                templateUrl: 'views/preview-audio.html'
            }).
            when('/help', {
                templateUrl: 'views/help.html'
            }).
            when('/my_wishlist', {
                templateUrl: 'views/my_wishlist.html'
            }).
            when('/my_students', {
                templateUrl: 'views/my_students.html'
            }).
            when('/my_favourites', {
                templateUrl: 'views/my_favourites.html'
            }).
            when('/my_messages', {
                templateUrl: 'views/my_messages.html'
            }).
            when('/my_messages_details', {
                templateUrl: 'views/my_messages_details.html'
            }).
            when('/my_purchase_history', {
                templateUrl: 'views/my_purchase_history.html'
            }).
            when('/my_payment', {
                templateUrl: 'views/my_payment.html'
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
            when('/affiliate_login', {
                templateUrl: 'views/affiliate_login.html'
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
                templateUrl: 'views/contacts.html'
            }).
            otherwise({
                redirectTo: '/index',
                controller:'logoutController'
            });
    }]);

// Logut Controller
loggedinApp.controller('logoutController',['$window','$scope','$cookieStore','$location',function($window,$scope,$cookieStore,$location){
    if($cookieStore.get("userObj") == undefined){
          $window.location.href = '../common/';
    }
     $scope.error1="check";
     $scope.logout=function(){
     $cookieStore.remove('userObj');
     $window.location.href = '../#/logout';
     };
}]);
