module.exports = function($scope, $state, $stateParams, AdminService) {

  var userId = $stateParams.id

  AdminService.getUser(userId, function (res) {
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
    AdminService.updateUser(userId, toSend, function (res) {
      $scope.identity.success = true
    }, function (err) {
      $scope.identity.error = err.message
    })
  }


  $scope.deleteUser = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteUser(userId, function (res) {
        $state.go('admin.userlist')
      }, function (err) {
        $scope.deleteUserError = err.message
      })
    }
  }
}
