'use strict';

angular.module('trackitWebApp.controllers')
    .controller('HomeCtrl', function ($scope, Task) {
        $scope.tasks = [
			{
				title: 'Installer NodeJS',
				status: 'OK',
				body: 'blabablablablabablablablabablabla',

			},
			{
				title: 'Installer Sails',
				status: 'OK',
				body: 'blabablablablabablablablabablabla',

			},
			{
				title: 'Installer Angular',
				status: 'OK',
				body: 'blabablablablabablablablabablabla',
			}
		]
    })
;
