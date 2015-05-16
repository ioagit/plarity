'use strict';
/**
 * @ngdoc overview
 * @name plarityApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('plarityApp')

  // configure views; the authRequired parameter is used for specifying pages
  // which should only be available while logged in
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/filters', {
        templateUrl: 'views/filters.html',
        controller: 'FiltersCtrl'
      })

      .otherwise({redirectTo: '/'});
  }]);
