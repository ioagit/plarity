'use strict';

/**
 * @ngdoc function
 * @name plarityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plarityApp
 */
angular.module('plarityApp')
  .controller('FiltersCtrl', function ($scope) {
    $scope.filterValues = {};
    $scope.onFilterChange = function(filters) {
      $scope.filterValues = filters;
    }
  });
