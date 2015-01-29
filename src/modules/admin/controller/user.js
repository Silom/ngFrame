'use strict';

module.exports = function ($scope, $state, AdminAccountService) {
  AdminAccountService.getUsers(null, function (res) {
    $scope.userList = res.data
  }, function (err) {
    $scope.error = err.message
  })

  $scope.goToDetail = function(id) {
    $state.go('admin.userlist.detail', {userid: id})
  }
}
