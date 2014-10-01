'use strict';

module.exports = ['$scope', '$location', 'ContactService', function($scope, $location, ContactService) {
  $scope.credentials = {
    name: '',
    email: '',
    message: ''
  }

  $scope.contact = function (credentials) {
    ContactService.contact(credentials).then(function (user) {
      //$rootScope.$broadcast(AUTH_EVENTS.sendSuccess)
      $location.path('/contact/')
    }, function () {
      //$rootScope.$broadcast(AUTH_EVENTS.sendFailed)
    })
  }
}]
