'use strict';

exports.AdminCtrl = ['$rootScope', '$scope', 'Users', 'Auth', function($rootScope, $scope, Users, Auth) {
  $scope.loading = true
  $scope.userRoles = Auth.userRoles

  Users.getAll(function(res) {
    $scope.users = res
    $scope.loading = false
  }, function(err) {
    $rootScope.error = "Failed to fetch users."
    $scope.loading = false
  })
}]
