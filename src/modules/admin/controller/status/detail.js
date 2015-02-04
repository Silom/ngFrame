'use strict';

module.exports = function ($scope, $state, $stateParams, AdminService) {
  var id = $stateParams.id
  $scope.updateStatus = {}

  AdminService.getStatus(id, function (res) {
    $scope.status = res
    $scope.updateStatusData = { name: res.name }
  }, function (err) {
    $scope.error = err.message
  })

  $scope.updateStatusSubmit = function (data) {
    AdminService.updateStatus(id, data, function (res) {
      $scope.status = res
      $scope.updateStatus.success = true
    }, function (err) {
      $scope.updateStatus.error = err.message
    })
  }

  $scope.deleteStatus = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteStatus(id, function (res) {
        $state.go('admin.statuslist')
      }, function (err) {
        $scope.deleteStatusError = err.message
      })
    }
  }
}
