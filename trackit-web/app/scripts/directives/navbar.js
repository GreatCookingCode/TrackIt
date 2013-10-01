'use strict';

angular.module('trackitWebApp')
    .directive('navbar', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/navbar.html',
            link: function(scope, elem, attr) {}
        }
    })
;