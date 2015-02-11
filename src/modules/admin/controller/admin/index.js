'use strict';

module.exports = function ($scope, AdminService) {
  AdminService.getAdmins(null, function (res) {
    $scope.adminList = res.data
  }, function (err) {
    $scope.error = err.message
  })
}
