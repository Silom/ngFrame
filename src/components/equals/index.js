'use strict';
// Check if one value equals another
// input(ng-model="value1" equals="{{value2}}")
// input(ng-model="value2")

module.exports = angular.module('equals', [])
.directive('equals', function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elem, attrs, ngModel) {
      if(!ngModel)
        return

      attrs.$observe('equals', function (val) {
        checkEquals()
      })

      scope.$watch(attrs.ngModel, function() {
        checkEquals()
      })
      function checkEquals() {
        var val1 = ngModel.$viewValue,
            val2 = attrs.equals

        ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2)
      }
    }
  }
})
