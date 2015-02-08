module.exports = function($scope, $state, $stateParams, AdminService) {

  var accountId = $stateParams.id

  AdminService.getAccount(accountId, function (res) {
    $scope.identity = res
  }, function (err) {
    $scope.error = err.message
  })

  $scope.identitySubmit = function (data) {
    var toSend = {
      name: {
        first: data.first,
        middle: data.middle || '',
        last: data.last
      }
    }
    AdminService.updateAccount(accountId, toSend, function (res) {
      $scope.identity.success = true
    }, function (err) {
      $scope.identity.error = err.message
    })
  }

  $scope.deleteAccount = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteAccount(accountId, function (res) {
        $state.go('admin.accountlist')
      }, function (err) {
        $scope.deleteAccountError = err.message
      })
    }
  }
}
