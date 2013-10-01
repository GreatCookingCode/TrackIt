'use strict';

angular.module('trackitWebApp.services')
    .factory('Task', [ '$resource', function($resource) {
        return $resource('api/tasks', {}, {});
    }])
;