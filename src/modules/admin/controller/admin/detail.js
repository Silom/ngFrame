'use strict';

module.exports = function($scope, $state, $stateParams, AdminService) {

  var adminId = $stateParams.id

  AdminService.getAdmin(adminId, function (res) {
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
    AdminService.updateAdmin(adminId, toSend, function (res) {
      $scope.identity.success = true
    }, function (err) {
      $scope.identity.error = err.message
    })
  }

  $scope.user = {
    unlink: function () {
      AdminService.adminUnlinkUser(adminId, function (res) {
        $scope.user.success = 'The link to the user was removed.'
        $scope.identity.user = null
      }, function (err) {
        $scope.user.error = err.message
      })
    },
    link: function (name) {
      AdminService.adminLinkUser(adminId, {username: name}, function (res) {
        $scope.user.success = 'User was added to the admin.'
        $scope.identity = res
      }, function (err) {
        $scope.user.error = err.message
      })
    }
  }

  // Seems broken in frame
  // $scope.permission = {
  //   submit: function (key) {
  //     AdminService.setAdminPermission(adminId, {permissions: { permit: true, name: key }}, function (res) {
  //       $scope.identity = res
  //     }, function (err) {
  //       $scope.permission.error = err.message
  //     })
  //   }
  // }

  $scope.deleteAdmin = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteAdmin(adminId, function (res) {
        $state.go('admin.adminlist')
      }, function (err) {
        $scope.deleteAdminError = err.message
      })
    }
  }
}
