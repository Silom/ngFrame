'use strict';

module.exports = function ($scope, $state, AdminService) {
  var request = function (page) {
    AdminService.getStatuses({
      limit: 50,
      page: page || 1
    }, function (res) {
      $scope.statusList = res
    }, function (err) {
      $scope.error = err.message
    })
  }

  $scope.currentPage = 1
  $scope.$watch('currentPage', function () {
    switchPage()
  })

  var switchPage = function () {
    request($scope.currentPage)
  }

  $scope.newStatusSubmit = function (data) {
    AdminService.addStatus(data, function (res) {
      $state.go('admin.statusdetail', {id: res._id})
      $scope.newStatus.error = 'test'
    }, function (err) {
      $scope.newStatus.error = err.message
    })
  }
}
