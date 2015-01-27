'use strict';

var pageModule = angular.module('accountPageModule', [])

pageModule.factory('AccountService', require('./service/account-factory'))

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('account.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })

  .state('account.settings', {
    url: 'settings/',
    template: require('./partials/settings.jade'),
    controller: function ($scope, AccountService) {
      
      AccountService.getAccount(function (user) {
        console.log(user)
        $scope.contactInformation = user
      },
      function (err) {
        console.log(err)
      })
    }
  })
}

module.exports = pageModule
