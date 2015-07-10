
var sampleApp = angular.module('superadmin', []);
 
//Define Routing for app

sampleApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
      when('/dashboard', {
        templateUrl: '../superadmin/views/dashboard.html'
      }).
      when('/messages',{
      	templateUrl: '../superadmin/views/messages.html'
      }).
      when('/messages_detail',{
      	templateUrl: '../superadmin/views/messages_detail.html'
      }).
       when('/instructors', {
        templateUrl: '../superadmin/views/instructors.html'
      }).
       when('/instructors_details', {
        templateUrl: '../superadmin/views/instructors_details.html'
      }).
       when('/students', {
        templateUrl: '../superadmin/views/students.html'
      }).
        when('/student_details', {
        templateUrl: '../superadmin/views/student_details.html'
      }).
       when('/affiliates', {
        templateUrl: '../superadmin/views/affiliates.html'
      }).
       when('/affiliate_details', {
        templateUrl: '../superadmin/views/affiliate_details.html'
      }).
       when('/courses', {
        templateUrl: '../superadmin/views/courses.html'
      }).
       when('/categories', {
        templateUrl: '../superadmin/views/categories.html'
      }).
       when('/sub_categories', {
        templateUrl: '../superadmin/views/sub_categories.html'
      }).
       when('/billing', {
        templateUrl: '../superadmin/views/billing.html'
      }).
       when('/billing_course', {
        templateUrl: '../superadmin/views/billing_course.html'
      }).
       when('/billing_enrollment', {
        templateUrl: '../superadmin/views/billing_enrollment.html'
      }).
       when('/offer_zone', {
        templateUrl: '../superadmin/views/offer_zone.html'
      }).
       when('/offer_zone_create', {
        templateUrl: '../superadmin/views/offer_zone_create.html'
      }).
       when('/news', {
        templateUrl: '../superadmin/views/news.html'
      }).
       when('/news_create', {
        templateUrl: '../superadmin/views/news_create.html'
      }).
       when('/blogs', {
        templateUrl: '../superadmin/views/blogs.html'
      }).
       when('/blog_create', {
        templateUrl: '../superadmin/views/blog_create.html'
      }).

       when('/reports', {
        templateUrl: '../superadmin/views/reports.html'
      }).

       when('/refund', {
        templateUrl: '../superadmin/views/refund.html'
      }).

       when('/settings', {
        templateUrl: '../superadmin/views/settings.html'
      }).

      otherwise({
        redirectTo: '/dashboard'
      });
}]);