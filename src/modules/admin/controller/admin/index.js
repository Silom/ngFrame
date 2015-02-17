'use strict';

module.exports = function ($scope, $state, AdminService) {
  AdminService.getAdmins(null, function (res) {
    $scope.adminList = res.data
  }, function (err) {
    $scope.error = err.message
  })

  $scope.newAdmin = {
    submit: function (input) {
      AdminService.addAdmin(input, function (res) {
        $state.go('admin.admindetail', {id: res._id})
      }, function (err) {
        $scope.newAdmin.error = err.message
      })
    }
  }
}
