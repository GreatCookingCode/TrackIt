'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.tasks = [
			{
				title: 'Installer NodeJS',
				status: 'OK',
				body: 'blabablabla',

			},
			{
				title: 'Installer Sails',
				status: 'OK',
				body: 'blabablabla',

			},
			{
				title: 'Installer Angular',
				status: 'OK',
				body: 'blabablabla',
			}
		]
    })
;
