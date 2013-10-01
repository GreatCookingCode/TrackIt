'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.todoTasks = Task.query({status: 'todo'});
        $scope.doingTasks = Task.query({status: 'doing'});
        $scope.doneTasks = Task.query({status: 'done'});

        $scope.task = new Task();
        $scope.addedTask = false;

        $scope.add = function() {
            $scope.task.$save({},
                function(resp) {
                    $scope.success = true;
                    var task = new Task(resp);
                    switch (task.status) {
                        case 'Todo':
                            $scope.todoTasks.push(task);
                            break;
                        case 'Doing':
                            $scope.doingTasks.push(task);
                            break;
                        case 'Done':
                            $scope.doneTasks.push(task);
                            break;
                        default:
                            break;
                    }
                    $scope.addedTask = $scope.task;
                    $scope.task = new Task();
                },
                function() {
                	$scope.taskAdded = false;
                })
            ;
        };
    })
;
