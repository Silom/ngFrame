'use strict';

module.exports = function($scope, $state, $stateParams, AdminService) {

  var adminId = $stateParams.id

  AdminService.getAdmin(adminId, function (res) {
    $scope.identity = res
  }, function (err) {
    $scope.error = err.message
  })

  $scope.identitySubmit = function (data) {
    var toSend = {
      name: {
        first: data.first,
        middle: data.middle || '',
        last: data.last
      }
    }
    AdminService.updateAdmin(adminId, toSend, function (res) {
      $scope.identity.success = true
    }, function (err) {
      $scope.identity.error = err.message
    })
  }

  $scope.deleteAdmin = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteAdmin(adminId, function (res) {
        $state.go('admin.adminlist')
      }, function (err) {
        $scope.deleteAdminError = err.message
      })
    }
  }
}
