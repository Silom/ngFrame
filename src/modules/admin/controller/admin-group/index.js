'use strict';

module.exports = function ($scope, AdminService) {
  AdminService.getAdminGroups(null, function (res) {
    $scope.groupList = res.data
  }, function (err) {
    $scope.error = err.message
  })
}
