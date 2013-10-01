'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task, $modal) {
        $scope.todoTasks = Task.query({status: 'todo'});
        $scope.doingTasks = Task.query({status: 'doing'});
        $scope.doneTasks = Task.query({status: 'done'});

        $scope.task = new Task();
        $scope.addedTask = false;
        $scope.deletedTask = false;

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
                    $scope.deletedTask = false;
                    $scope.task = new Task();
                },
                function() {
                	$scope.addedTask = false;
                })
            ;
        };

        $scope.delete = function(id) {
        	var task = new Task({id: id});
        	task.$delete({}, function() {
        		switch (task.status) {
	                case 'Todo':
	                    $scope.todoTasks.splice(task, 1);
	                    break;
	                case 'Doing':
	                    $scope.doingTasks.splice(task, 1);
	                    break;
	                case 'Done':
	                    $scope.doneTasks.splice(task, 1);
	                    break;
	                default:
	                    break;
	            }
	            $scope.deletedTask = task;
	            $scope.addedTask = false;		
        	},
        	function() {
        		$scope.deletedTask = false;
        	});			
        };

        $scope.openTask = function() {
            var modal = $modal.open({
                templateUrl: 'views/modal-task.html',
                controller: 'ModalTaskCtrl'
            });
        };
    })
    .controller('ModalTaskCtrl', function($scope, $modal) {
        $scope.exit = function() {
            $modal.dismiss();
        };
    })
;
