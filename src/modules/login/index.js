'use strict';

var pageModule = angular.module('loginPageModule', [])

pageModule.controller('LoginCtrl', require('./controller/login'))
pageModule.controller('LoginForgotCtrl', require('./controller/forgot'))
pageModule.controller('LoginResetCtrl', require('./controller/reset'))
pageModule.factory('loginService', require('./'))

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('anon.login', {
    url: '/login/',
    template: require('./partials/login.jade'),
    controller: 'LoginCtrl'
  })
  .state('anon.login.reset', {
    url: '/login/reset/',
    template: require('./partials/reset.jade'),
    controller: 'LoginResetCtrl'
  })
  .state('anon.login.forgot', {
    url: '/login/forgot/',
    template: require('./partials/forgot.jade'),
    controller: 'LoginForgotCtrl'
  })
}

module.exports = pageModule
