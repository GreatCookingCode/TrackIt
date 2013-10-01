'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.todoTasks = Task.query();
        $scope.doingTasks = Task.query();
        $scope.doneTasks = Task.query();

        $scope.task = {};

        $scope.add = function() {
            $scope.task.save({})
                .success(function() {

                })
                .error(function() {

                })
            ;
        };
    })
;
