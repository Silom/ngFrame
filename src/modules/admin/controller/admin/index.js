'use strict';

module.exports = function ($scope, $state, AdminService) {
  var request = function (page) {
    AdminService.getAdmins({
      limit: 50,
      page: page || 1
    }, function (res) {
      $scope.adminList = res
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
