'use strict';

module.exports = function($scope, $state, AccountService) {
  $scope.contactInformation = function() {
    var formInput = $scope.contactInformation

    AccountService.updateName({
      name: {
        first: formInput.first,
        middle: formInput.middle,
        last: formInput.last
      }
    },
    function() {
      // Alert success
    },
    function(err) {
      $scope.contactInformation.error = err.message
    })
  }
}
