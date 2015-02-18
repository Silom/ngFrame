'use strict';

module.exports = function($scope, $state, $stateParams, AdminService) {
  var groupId = $stateParams.id

  AdminService.getAdminGroup(groupId, function (res) {
    $scope.group = res
  }, function (err) {
    $scope.error = err.message
  })

  $scope.details = {
    submit: function (input) {
      AdminService.updateAdminGroup(groupId, input, function (res) {
        $scope.details.success = true
      }, function (err) {
        $scope.details.error = err.message
      })
    }
  }

  $scope.deleteGroup = function () {
    if (confirm('Are you sure?')) {
      AdminService.deleteAdminGroup(groupId, function (res) {
        $state.go('admin.grouplist')
      }, function (err) {
        $scope.deleteGroupError = err.message
      })
    }
  }
}
