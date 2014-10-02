'use strict';

window._ = require('lodash')

// Get all the Angulars
var angular = require('angular-bsfy'),
    ngCookies = require('angular-bsfy/cookies')

require('restangular')
require('angular-bootstrap')

// Load all the Angulars
var appDependencies = [
  ngCookies.name,
  require('angular-ui-router'),
  'ui.bootstrap',
  'restangular'
]

// Load all feature into this array
var customModules = [
  require('./views/home'),
  require('./views/about'),
  require('./views/auth'),
  require('./views/account'),
  require('./views/contact')
]

// Add the module name of each custom module to our app dependencies
customModules.forEach(function(model) {
  appDependencies.push(model.name)
})

// Construct app
var app = angular.module('NinjaApp', appDependencies)

// Globals
app.controller('AppInformations', require('./config.js').varCtrl)

// Basic app configs
app.config(['$stateProvider', '$locationProvider', '$httpProvider', 'USER_ROLES', 'RestangularProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $httpProvider, USER_ROLES, RestangularProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)

  // Cors
  $httpProvider.defaults.useXDomain = true
  delete $httpProvider.defaults.headers.common['X-Requested-With']
  RestangularProvider.setBaseUrl(require('./config.js').apiOrigin)

  // Since I want feature sorted modules you can find all routes in the module itself
  customModules.forEach(function(model) {
    if (model.routings)
      model.routings($stateProvider, USER_ROLES)
  })

  $stateProvider.state('404', {
    url: '*path',
    templateUrl: './views/http/404.html'
  })
}])
