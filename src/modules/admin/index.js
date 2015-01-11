'use strict';

var pageModule = angular.module('adminPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('admin.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })
}

module.exports = pageModule
