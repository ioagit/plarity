/**
 * Created by io on 5/16/15.
 */


var app = angular.module('reconsole.components', ['ui.bootstrap']);

app.directive('recFilters', function() {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'scripts/directives/rec-filters.tpl.html',
    link: function(scope, elem, attrs) {

      //Directive functionality goes here.

      scope.filters = [
        {
          heading: 'OVERLAY',
          expanded: false

        },
         {
          heading: 'LOCATION',
          expanded: false
        },
        {
          heading: 'POLIGON TOOL',
          expanded: false
        }
        ];


      //Directive functionality goes here.
      scope.setFilter = function(index, value) {
        scope.filters[index].value = value;
      };

      scope.groupClicked = function(index) {

        var filter = scope.filters[index];

        //We are going to open this. Close all that has no values
        if (!filter.expanded) {
          closeFiltersWithNoValues();
        }
        else {
          filter.expanded = false;
        }
      };

      function closeFiltersWithNoValues() {
        scope.filters.forEach(function(filter) {
          filter.expanded = getFilterValue(filter) ? true : false;
        })
      }

      scope.clearFilter = function(index) {
        scope.filters[index].value = null;
      };

      function filterHasValue(index) {
        return getFilterValue(scope.filters(index));
      }

      function getFilterValue(filter) {
        return filter.value;
      }

    }
  };
});
