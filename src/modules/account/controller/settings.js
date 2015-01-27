'use strict';

module.exports = function($scope, AccountService) {

  AccountService.getAccount(function (user) {
    // contact form information
    $scope.contactInformation = user.name
  },
  function (err) {
    $scope.error = err.message
  })

  // Form Controller for name
  $scope.contactInformationSubmit = function() {
    var formInput = $scope.contactInformation

    AccountService.updateName({
      name: {
        first: formInput.first,
        middle: formInput.middle || '',
        last: formInput.last
      }
    },
    function() {
      $scope.contactInformation.success = true
    },
    function(err) {
      $scope.contactInformation.error = err.message
    })
  }
}
