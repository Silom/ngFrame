'use strict';

module.exports = function($rootScope, $scope, $state, $window, LoginService) {
  $scope.forgot = function() {
    LoginService.forgot({
        email: $scope.email
      },
      function() {
        $state.go('anon.login')
      },
      function(err) {
        $rootScope.error = "Failed to login"
      })
  }
}
