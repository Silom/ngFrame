module.exports = function($scope, $stateParams, AdminAccountService) {

  var userId = $stateParams.id

  AdminAccountService.getUser(userId, function (res) {
    $scope.identity = res
  }, function (err) {
    $scope.error = err.message
  })


  $scope.identitySubmit = function (data) {
    var toSend = {
      isActive: data.isActive,
      username: data.username,
      email: data.email
    }

    AdminAccountService.updateUser(userId, toSend, function (res) {
      $scope.identity.success = true
    }, function (err) {
      $scope.identity.error = err.message
    })
  }

}
