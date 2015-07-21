'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('superadmin')
    .directive('dashboard-item',function() {
        return {
            templateUrl:'../superadmin/dashboard/dashboard-item.html',
            restrict:'E',
            replace:true,
            scope: {
                'model': '=',
                'colour': '@',
                'goto':'@',
                'icon-style': '@',
                'count-number': '@',
                'name': '@',
                'type':'@'
            }
        }
    });
