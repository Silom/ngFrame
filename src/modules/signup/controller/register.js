'use strict';

module.exports = function($rootScope, $scope, $location, Auth) {
  $scope.role = Auth.userRoles.user
  $scope.userRoles = Auth.userRoles

  $scope.register = function() {
    Auth.register({
        name: $scope.name,
        username: $scope.username,
        password: $scope.password,
        email: $scope.email
      },
      function() {
        $location.path('/login')
      },
      function(err) {
        $rootScope.error = err
      })
  }
}
