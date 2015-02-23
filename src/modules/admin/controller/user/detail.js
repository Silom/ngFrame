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

  $scope.password = {
    submit: function (input) {
      AdminService.updateUserPassword(userId, input, function (res) {
        $scope.identity = res
        $scope.password.success = true
      }, function (err) {
        $scope.password.error = err.message
      })
    }
  }

  $scope.roles = {
    unlinkAdmin: function () {
      AdminService.adminUnlinkUser($scope.identity.roles.admin.id, function (res) {
        $scope.roles.success = 'The link to this admin was removed.'
        $scope.identity.roles.admin = null
      }, function (err) {
        $scope.user.error = err.message
      })
    },
    unlinkAccount: function () {
      AdminService.accountUnlinkUser($scope.identity.roles.account.id, function (res) {
        $scope.roles.success = 'The link to this Account was removed.'
        $scope.identity.roles.account = null
      }, function (err) {
        $scope.roles.error = err.message
      })
    },
    linkAdmin: function (adminId) {
      AdminService.adminLinkUser(adminId, {username: $scope.identity.username}, function (res) {
        $scope.roles.success = 'Admin was added to this User.'
        $scope.identity.roles.admin = {
          id: res._id,
          name: res.name.first + (res.name.middle ? (' ' + res.name.middle) : '') +' '+ res.name.last
        }
      }, function (err) {
        $scope.roles.error = err.message
      })
    },
    linkAccount: function (accountId) {
      AdminService.accountLinkUser(accountId, {username: $scope.identity.username}, function (res) {
        $scope.roles.success = 'Account was added to this User.'
        $scope.identity.roles.account = {
          id: res._id,
          name: res.name.first + (res.name.middle ? (' ' + res.name.middle) : '') +' '+ res.name.last
        }
      }, function (err) {
        $scope.roles.error = err.message
      })
    }
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
