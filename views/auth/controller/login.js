'use strict';

module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
  if (AuthService.isAuthenticated())
     return $state.go('account')

  $scope.credentials = {
    username: '',
    password: ''
  }

  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess)
      $scope.setCurrentUser(user)
      // Forward user
      $state.go('account')
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed)
    })
  }
}]
