/**
 * Created by io on 5/16/15.
 */


var app = angular.module('reconsole.components', []);

app.directive('recFilters', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    template: '<h3>re filters</h3>'
  };
});
