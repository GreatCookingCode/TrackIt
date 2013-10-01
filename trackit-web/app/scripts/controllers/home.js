'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Foo) {
        $scope.foos = Foo.query();
    })
;
