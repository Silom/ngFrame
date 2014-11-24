'use strict';

module.exports = function($rootScope, $scope, $state, $window, LoginService) {
  $scope.reset = function() {
    LoginService.reset({
        key: $scope.key,
        email: $scope.email,
        password: $scope.password
      },
      function() {
        $state.go('anon.login')
      },
      function(err) {
        $rootScope.error = "Something went wrong"
      })
  }
}
