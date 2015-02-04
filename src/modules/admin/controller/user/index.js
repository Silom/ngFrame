'use strict';

module.exports = function ($scope, AdminService) {
  AdminService.getUsers(null, function (res) {
    $scope.userList = res.data
  }, function (err) {
    $scope.error = err.message
  })
}
