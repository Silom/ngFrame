'use strict';

module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$location', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $location) {
  if (AuthService.isAuthenticated())
     return $location.path('/account')

  $scope.credentials = {
    username: '',
    password: ''
  }

  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess)
      $scope.setCurrentUser(user)
      // Forward user
      $location.path('/account/')
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed)
    })
  }
}]
