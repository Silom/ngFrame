'use strict';
module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', '$location', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $location) {
  if (AuthService.isAuthenticated())
     return $location.path('/account/')

  $scope.credentials = {
    name: '',
    username: '',
    password: '',
    email: ''
  }

  $scope.signup = function (credentials) {
    AuthService.signup(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.signupSuccess)
      $location.path('/account/')
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.signupFailed)
    })
  }
}]
