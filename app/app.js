'use strict';

// Declare app level module which depends on views, and components
angular.module('variantdatabase', [ 'ngRoute', 'variantdatabase.login', 'variantdatabase.report', 'variantdatabase.manage'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise(
            {
                redirectTo: '/login'
            });
    }]);
