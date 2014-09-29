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
  require('./views/home/index'),
  require('./views/about/index'),
  require('./views/auth/index'),
  require('./views/account/index')
]

// Add the module name of each custom module to our app dependencies
customModules.forEach(function(model) {
  appDependencies.push(model.name)
})

// Construct app
var app = angular.module('NinjaApp', appDependencies)

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', 'USER_ROLES', function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, USER_ROLES) {
  $locationProvider.html5Mode(true)

  // Since I want feature sorted modules you can find all routes in the module itself
  customModules.forEach(function(model) {
    if (model.routings)
      model.routings($stateProvider, USER_ROLES)
  })

  $stateProvider.state('404', {
    url: '*path',
    templateUrl: './views/http/404.html'
  })

  // Config for Auth
  $httpProvider.interceptors.push(['$injector', function ($injector) {
    return $injector.get('AuthInterceptor')
  }])
}])

// Auth behaviour
app.run(['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    // if next.data will check if any validation role is given
    if (next.data) {
      if (!AuthService.isAuthorized(next.data.authorizedRoles)) {
        event.preventDefault()
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized)
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated)
        }
      }
    }
  })
}])
