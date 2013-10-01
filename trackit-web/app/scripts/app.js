'use strict';

angular.module('trackitWebApp', [ 'trackitWebApp.dependencies' ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
;

angular.module('trackitWebApp.controllers', []);
angular.module('trackitWebApp.directives', []);
angular.module('trackitWebApp.services', [ 'ngResource' ]);

angular.module('trackitWebApp.dependencies', [
    'ngRoute',
    'trackitWebApp.services',
    'trackitWebApp.controllers',
    'trackitWebApp.directives'
]);