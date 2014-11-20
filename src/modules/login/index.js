'use strict';

var pageModule = angular.module('loginPageModule', [])

pageModule.controller('LoginCtrl', require('./controller/login'))

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('anon.login', {
    url: '/login/',
    template: require('./partials/login.jade'),
    controller: 'LoginCtrl'
  })
}

module.exports = pageModule
