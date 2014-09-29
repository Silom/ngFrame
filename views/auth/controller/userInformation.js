'use strict';

module.exports = ['$scope', 'USER_ROLES', 'AuthService', function ($scope, USER_ROLES, AuthService) {
  $scope.currentUser = null
  $scope.userRoles = USER_ROLES
  $scope.isAuthorized = AuthService.isAuthorized

    // Login if there are cookies
  if ($cookieStore.get('username') && $cookieStore.get('key') && !AuthService.isAuthenticated()) {
    var username = $cookieStore.get('username')
    var key = $cookieStore.get('key')
    var role = 'user'

    Session.create($cookieStore.get('key'), $cookieStore.get('username'), 'user')

    $scope.currentUser = {
      user: username,
      role: role
    }
  }

  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user
  }
}]
