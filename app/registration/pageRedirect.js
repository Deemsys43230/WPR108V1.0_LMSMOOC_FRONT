var pageRedirect = angular.module('commonApp', []);

pageRedirect.controller("affiliateApply",function($scope){
    $scope.redirect="/affiliate_login";
});

pageRedirect.controller("userApply",function($scope){
    $scope.redirect="/login";
});
