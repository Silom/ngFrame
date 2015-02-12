'use strict';

module.exports = function ($scope, $state, AdminService, momentjs) {

  $scope.ago = function (time) {
    return momentjs(time).fromNow()
  }

  AdminService.getAccounts(null, function (res) {
    $scope.accountList = res.data
  }, function (err) {
    $scope.error = err.message
  })

  $scope.newAccount = {
    submit: function (input) {
      AdminService.addAccount(input, function (res) {
        $state.go('admin.accountdetail', {id: res._id})
      }, function (err) {
        $scope.newAccount.error = err.message
      })
    }
  }
}
