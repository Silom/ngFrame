'use strict';

module.exports = function($rootScope, $scope, $state, LoginService) {
  $scope.forgot = function() {
    LoginService.forgot({
        email: $scope.email
      },
      function() {
        $state.go('anon.login-reset')
      },
      function(err) {
        $scope.error = err.message
      })
  }
}
