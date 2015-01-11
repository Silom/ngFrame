'use strict';

var pageModule = angular.module('mainPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('public.home', {
    url: '/',
    template: require('./partials/index.jade')
  })
}

module.exports = pageModule
