module.exports = function($scope, $state, $stateParams, AdminService, momentjs) {

  var accountId = $stateParams.id

  $scope.ago = function (time) {
    return momentjs(time).fromNow()
  }

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

  $scope.user = {
    unlink: function () {
      AdminService.accountUnlinkUser(accountId, function (res) {
        $scope.user.success = 'The link to the user was removed.'
        $scope.identity.user = null
      }, function (err) {
        $scope.user.error = err.message
      })
    },
    link: function (name) {
      AdminService.accountLinkUser(accountId, {username: name}, function (res) {
        $scope.user.success = 'User was added to the account.'
        $scope.identity = res
      }, function (err) {
        $scope.user.error = err.message
      })
    },
  }

  // save to note.list
  $scope.note = {
    submit: function (input) {
      AdminService.accountAddNote(accountId, {data: input}, function (res) {
        $scope.identity = res
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
