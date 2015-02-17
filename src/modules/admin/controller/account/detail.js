module.exports = function($scope, $state, $stateParams, AdminService, momentjs) {

  var accountId = $stateParams.id

  $scope.ago = function (time) {
    return momentjs(time).fromNow()
  }

  AdminService.getAccount(accountId, function (res) {
    $scope.account = res
  }, function (err) {
    $scope.error = err.message
  })

  $scope.identity = {
    submit: function (input) {
      var toSend = {
        name: {
          first: input.first,
          middle: input.middle || '',
          last: input.last
        }
      }
      AdminService.updateAccount(accountId, toSend, function (res) {
        $scope.identity.success = true
      }, function (err) {
        $scope.identity.error = err.message
      })
    }
  }

  $scope.user = {
    unlink: function () {
      AdminService.accountUnlinkUser(accountId, function (res) {
        $scope.user.success = 'The link to the user was removed.'
        $scope.account.user = null
      }, function (err) {
        $scope.user.error = err.message
      })
    },
    link: function (name) {
      AdminService.accountLinkUser(accountId, {username: name}, function (res) {
        $scope.user.success = 'User was added to the account.'
        $scope.account = res
      }, function (err) {
        $scope.user.error = err.message
      })
    }
  }

  $scope.note = {
    submit: function (input) {
      AdminService.accountAddNote(accountId, {data: input}, function (res) {
        $scope.account = res
        $scope.note.data = null
      }, function (err) {
        $scope.note.error = err.message
      })
    }
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
