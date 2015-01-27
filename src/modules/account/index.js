'use strict';

var pageModule = angular.module('accountPageModule', [])

pageModule.controller('SettingsController', require('./controller/settings.js'))
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
    controller: 'SettingsController'
  })
}

module.exports = pageModule
