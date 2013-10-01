'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.todoTasks = Task.query({status: 'todo'});
        $scope.doingTasks = Task.query({status: 'doing'});
        $scope.doneTasks = Task.query({status: 'done'});

        $scope.task = new Task();

        $scope.add = function() {
            $scope.task.$save({},
                function() {

                },
                function() {

                })
            ;
        };
    })
;
