'use strict';

module.exports = function ($scope, $state, AdminService, momentjs) {

  $scope.ago = function (time) {
    return momentjs(time).fromNow()
  }

  var request = function (page) {
    AdminService.getAccounts({
      limit: 50,
      page: page || 1
    }, function (res) {
      $scope.accountList = res
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
