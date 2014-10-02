'use strict';

module.exports = ['$scope', '$rootScope', 'AUTH_EVENTS', '$state', 'AuthService', function($scope, $rootScope, AUTH_EVENTS, $state, AuthService) {
  $scope.logout = function() {
    AuthService.logout().then(function () {
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess)
      $scope.setCurrentUser(null)
      $state.go('login')
    })
  }
}]
