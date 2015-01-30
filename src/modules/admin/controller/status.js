'use strict';

module.exports = function ($scope, $state, AdminService) {

  AdminService.getStatuses(null, function (res) {
    $scope.statusList = res.data
  }, function (err) {
    $scope.error = err.message
  })

  $scope.newStatusSubmit = function (data) {
    AdminService.addStatus(data, function (res) {

      $state.go('admin.statusdetail', {id: res._id})
      $scope.newStatus.error = 'test'
    }, function (err) {
      $scope.newStatus.error = err.message
    })
  }
}
