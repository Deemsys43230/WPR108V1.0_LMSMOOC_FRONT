//Module Creation
var loggedinApp = angular.module('logApp', []);

loggedinApp.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.
            when('/index', {
                templateUrl: 'course_category.html'
            }).
            when('/profile_edit', {
                templateUrl: 'profile_edit.html'
            }).
            when('/primary_info_edit', {
                templateUrl: 'primary_info_edit.html'
            }).
            when('/account_edit', {
                templateUrl: 'account_edit.html'
            }).
            when('/payment_edit', {
                templateUrl: 'payment_edit.html'
            }).
            when('/profile_view', {
                templateUrl: 'profile_view.html'
            }).
            when('/my_courses', {
                templateUrl: 'my_courses.html'
            }).
            when('/new_course', {
                templateUrl: 'new_course.html'
            }).
            when('/add_section', {
                templateUrl: 'add_section.html'
            }).
            when('/add_lecture', {
                templateUrl: 'add_lecture.html'
            }).
            when('/add_lecture_new', {
                templateUrl: 'add_lecture_new.html'
            }).
            when('/lecture_edit', {
                templateUrl: 'lecture_edit.html'
            }).
            when('/view-quiz', {
                templateUrl: 'view-quiz.html'
            }).
            when('/question-list', {
                templateUrl: 'question-list.html'
            }).
            when('/add_question', {
                templateUrl: 'add_question.html'
            }).
            when('/edit_question', {
                templateUrl: 'edit_question.html'
            }).
            when('/quiz_preview', {
                templateUrl: 'quiz_preview.html'
            }).
            when('/add_promocode', {
                templateUrl: 'add_promocode.html'
            }).
            when('/preview', {
                templateUrl: 'preview.html'
            }).
            when('/preview_text', {
                templateUrl: 'preview_text.html'
            }).
            when('/preview-video', {
                templateUrl: 'preview-video.html'
            }).
            when('/preview-audio', {
                templateUrl: 'preview-audio.html'
            }).
            when('/help', {
                templateUrl: 'help.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);