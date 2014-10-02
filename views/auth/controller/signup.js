'use strict';

module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$state', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
  if (AuthService.isAuthenticated())
     return $state.go('account')

  $scope.credentials = {
    name: '',
    username: '',
    password: '',
    email: ''
  }

  $scope.signup = function (credentials) {
    AuthService.signup(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.signupSuccess)
      $state.go('account')
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.signupFailed)
    })
  }
}]
