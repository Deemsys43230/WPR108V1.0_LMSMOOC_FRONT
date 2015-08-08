var pageRedirect = angular.module('commonApp', []);

pageRedirect.controller("affiliateApply",function($scope){
	alert("scope taking");
    $scope.redirect="/affiliate_login";
});

pageRedirect.controller("userApply",function($scope){
    $scope.redirect="/login";
});
