'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.todoTasks = Task.query();
        $scope.doingTasks = Task.query();
        $scope.doneTasks = Task.query();
    })
;
