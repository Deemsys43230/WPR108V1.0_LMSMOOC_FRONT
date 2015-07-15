//Module Creation
var loggedinApp = angular.module('logApp', []);

loggedinApp.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.
            when('/index', {
                templateUrl: 'course_category.html'
            }).
            when('/course_category', {
                templateUrl: 'course_category.html'
            }).
            when('/offer_zone', {
                templateUrl: 'offer_zone.html'
            }).
            when('/news_events', {
                templateUrl: 'news_events.html'
            }).
            when('/news_detail', {
                templateUrl: 'news_detail.html'
            }).
            when('/blog', {
                templateUrl: 'blog.html'
            }).
            when('/blog_post', {
                templateUrl: 'blog_post.html'
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
            when('/my_wishlist', {
                templateUrl: 'my_wishlist.html'
            }).
            when('/my_students', {
                templateUrl: 'my_students.html'
            }).
            when('/my_favourites', {
                templateUrl: 'my_favourites.html'
            }).
            when('/my_messages', {
                templateUrl: 'my_messages.html'
            }).
            when('/my_messages_details', {
                templateUrl: 'my_messages_details.html'
            }).
            when('/my_purchase_history', {
                templateUrl: 'my_purchase_history.html'
            }).
            when('/my_payment', {
                templateUrl: 'my_payment.html'
            }).
            when('/term_of_use', {
                templateUrl: 'term_of_use.html'
            }).
            when('/privacy_policy', {
                templateUrl: 'privacy_policy.html'
            }).
            when('/refund_policy', {
                templateUrl: 'refund_policy.html'
            }).
            when('/affiliate_login', {
                templateUrl: 'affiliate_login.html'
            }).
            when('/about_us', {
                templateUrl: 'about_us.html'
            }).
            when('/promocode', {
                templateUrl: 'promocode.html'
            }).
            when('/FAQ', {
                templateUrl: 'FAQ.html'
            }).
            when('/contacts', {
                templateUrl: 'contacts.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);