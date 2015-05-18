/**
 * Created by io on 5/16/15.
 */


var app = angular.module('reconsole.components', ['ui.bootstrap']);


app.directive('recFilterHeading', function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/rec-filter-heading.tpl.html',
    scope: {
      filter: '=',
      onHeadClick: '&',
      onXClick: '&'
    }
  }
});

app.directive('recFilters', function() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/directives/rec-filters.tpl.html',
    scope: {
      onFilterChange: '&'
    },
    link: function(scope, elem, attrs) {

      //Directive functionality goes here.


      scope.filters = [
        {
          heading: 'OVERLAY',
          open: false

        },
         {
          heading: 'LOCATION',
          open: false
        },
        {
          heading: 'POLIGON TOOL',
          open: false
        }
        ];


      /**
       * Set the value of a filter
       * @param filter The filter object
       * @param value  The value. Could be an object or a primitive
       */
      scope.setFilter = function(filter, value) {
        filter.value = value;
        scope.filterClicked(filter);
        scope.onFilterChange({filters:  scope.filters});
      };

      /**
       * When the header of filter is clicked
       * If this group is close then close others that has no values.
       * Filters with values will remain open but only showing theirs widgets
       * @param filter
       */
      scope.filterClicked = function(filter) {

        if (!filter.open) {
          closeFiltersWithNoValues(filter);
          filter.edit = !filter.value;
          filter.open = true;
        }
        else {
          filter.open = !!filter.value;
          filter.edit = false;
        }

      };

      /**
       * When clicking on a widget to change the filters value.
       * Filters should show current filter selection
       * @param filter
       */
      scope.editFilter = function(filter) {
        closeFiltersWithNoValues(filter);
        filter.edit = true;
      };


      /**
       * Close all filters that has no value or selection.
       * Shows widgets for the filters that hava valid value or selection
       * @param currentFilter
       */
      function closeFiltersWithNoValues(currentFilter) {
        scope.filters.forEach(function(filter) {

          if (filter === currentFilter)
             return;

          filter.open = !!filter.value;
          filter.edit = false;

        })
      }

      /**
       * Reset a filter value.
       * @param filter
       */
      scope.clearFilter = function(filter) {
        filter.value = null;
        scope.filterClicked(filter);
        filter.edit = true;

      };


    }
  };
});
