'use strict';

angular.module('trackitWebApp.services')
    .factory('Foo', [ '$resource', function($resource) {
        return $resource('api/foo', {}, {});
    }])
;