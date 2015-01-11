'use strict';

module.exports = function($rootScope, $scope, $location, ContactService) {
  $scope.contact = function() {
    ContactService.contact({
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
      },
      function() {
        $location.path('/');
      },
      function(err) {
        $sope.error = err.message
      })
  }
}
