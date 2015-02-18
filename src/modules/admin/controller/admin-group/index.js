'use strict';

module.exports = function ($scope, $state, AdminService) {
  AdminService.getAdminGroups(null, function (res) {
    $scope.groupList = res.data
  }, function (err) {
    $scope.error = err.message
  })

  $scope.newGroup = {
    submit: function (input) {
      AdminService.addAdminGroup(input, function (res) {
        $state.go('admin.groupdetail', {id: res._id})
      }, function (err) {
        $scope.newGroup.error = err.message
      })
    }
  }
}
