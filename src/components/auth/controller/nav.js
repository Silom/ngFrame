'use strict';

module.exports = ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
  $scope.user = Auth.user
  $scope.userRoles = Auth.userRoles
  $scope.accessLevels = Auth.accessLevels

  $scope.logout = function() {
    Auth.logout(function() {
      $location.path('/login')
    }, function() {
      $location.path('/login')// do nothing, local stuff is gone anyway
    })
  }
}]
