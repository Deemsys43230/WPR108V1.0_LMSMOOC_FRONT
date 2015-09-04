var facebook= angular.module('commonApp', []);

facebook.controller('myController', function($scope){
    $scope.load = function () {
        alert("load event detected!");
    }
});
