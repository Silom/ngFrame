'use strict';

var pageModule = angular.module('signupPageModule', [])

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('anon.signup', {
    url: '/signup/',
    template: require('./partials/signup.jade'),
    controller: 'RegisterCtrl'
  })
}

module.exports = pageModule
