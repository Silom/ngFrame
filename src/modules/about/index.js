'use strict';

var pageModule = angular.module('aboutPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('public.about', {
    url: '/about/',
    template: require('./partials/index.jade')
  })
}

module.exports = pageModule
