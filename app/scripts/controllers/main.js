'use strict';

/**
 * @ngdoc function
 * @name plarityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plarityApp
 */
angular.module('plarityApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
