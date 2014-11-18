'use strict';

var pageModule = angular.module('httpPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('public.404', {
    url: '/404/',
    template: require('./404.jade')
  })
}

module.exports = pageModule
