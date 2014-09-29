'use strict';

module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', '$location', 'AuthService', function($scope, $rootScope, AUTH_EVENTS, $location, AuthService) {
  $scope.logout = function() {
    AuthService.logout().then(function () {
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess)
      $scope.setCurrentUser(null)
      $location.path('/login/')
    })
  }
}]
