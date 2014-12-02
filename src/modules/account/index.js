'use strict';

var pageModule = angular.module('accountPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('account.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })
}

module.exports = pageModule
