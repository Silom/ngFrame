'use strict';

var pageModule = angular.module('loginPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('anon.login', {
    url: '/login/',
    template: require('./partials/login.jade'),
    controller: 'LoginCtrl'
  })
}

module.exports = pageModule
