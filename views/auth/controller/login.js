'use strict';

module.exports = function($rootScope, $scope, $state, $window, Auth) {
  $scope.login = function() {
    Auth.login({
        username: $scope.username,
        password: $scope.password
      },
      function(user) {
        if (user.role.title === 'admin')
          $state.go('admin.dashboard')
        else if (user.role.title === 'user')
          $state.go('account.dashboard')
        else
          $state.go('public.home')
      },
      function(err) {
        $rootScope.error = "Failed to login"
      })
  }

  $scope.loginOauth = function(provider) {
    $window.location.href = '/auth/' + provider
  }
}
