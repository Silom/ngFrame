'use strict';

module.exports = function ($scope, AdminService, momentjs) {

  $scope.ago = function (time) {
    return momentjs(time).fromNow()
  }

  AdminService.getAccounts(null, function (res) {
    $scope.accountList = res.data
  }, function (err) {
    $scope.error = err.message
  })
}
