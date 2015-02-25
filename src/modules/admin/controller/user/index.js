'use strict';

module.exports = function ($scope, AdminService) {
  var request = function (page) {
    AdminService.getUsers({
      limit: 50,
      page: page || 1
    }, function (res) {
      $scope.userList = res
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
}
