'use strict';

module.exports = function ($scope, $state, AdminService) {

  var request = function (page) {
    AdminService.getAdminGroups({
      limit: 50,
      page: page || 1
    }, function (res) {
      $scope.groupList = res
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
