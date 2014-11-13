'use strict'

// Get all the Angulars
var angular = require('angular-bsfy')

require('angular-bootstrap')

// Load all the Angulars
var appDependencies = [
  'ui.bootstrap',
  require('angular-ui-router'),
  require('angular-bsfy/cookies').name,
  require('./components/auth').name
]

// Load all feature into this array
var customModules = [
  require('./modules/home'),
  require('./modules/about'),
  require('./modules/admin'),
  require('./modules/account'),
  require('./modules/contact')
]

// Add the module name of each custom module to our app dependencies
customModules.forEach(function(model) {
  appDependencies.push(model.name)
})

// Construct app
var app = angular.module('FrameApp', appDependencies)

// Globals
app.controller('AppInformations', require('./config.js').varCtrl)


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  var access = require('./components/auth/routingConfig.js').accessLevels

  // Public routes
  $stateProvider
    .state('public', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        access: access.public
      }
    })
    .state('anon', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        access: access.anon
      }
    })
    .state('account', {
      abstract: true,
      url: '/account/',
      template: "<ui-view/>",
      data: {
        access: access.user
      }
    })
    .state('admin', {
      abstract: true,
      url: '/admin/',
      template: "<ui-view/>",
      data: {
        access: access.admin
      }
    })
    .state('public.404', {
      url: '/404/',
      templateUrl: '404'
    })
    
    .state('anon.login', {
      url: '/login/',
      templateUrl: 'login',
      controller: 'LoginCtrl'
    })
    .state('anon.signup', {
      url: '/signup/',
      templateUrl: 'signup',
      controller: 'RegisterCtrl'
    })


  // Since I want modules you can find all routes in the module itself
  customModules.forEach(function(model) {
    if (model.routings)
      model.routings($stateProvider, access)
  })

  $urlRouterProvider.otherwise('/404')

  // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
  $urlRouterProvider.rule(function($injector, $location) {
    if($location.protocol() === 'file') return

    var path = $location.path(),
        search = $location.search(),
        params

    // check to see if the path already ends in '/'
    if (path[path.length - 1] === '/') return

    // If there was no search string / query params, return with a `/`
    if (Object.keys(search).length === 0) return path + '/'

    // Otherwise build the search string and return a `/?` prefix
    params = []
    angular.forEach(search, function(v, k){
      params.push(k + '=' + v)
    })
    return path + '/?' + params.join('&')
  })

  $locationProvider.html5Mode(true)

  $httpProvider.interceptors.push(function($q, $location) {
    return {
      'responseError': function(response) {
        if(response.status === 401 || response.status === 403)
          $location.path('/login')
        return $q.reject(response)
      }
    }
  })

})

.run(function ($rootScope, $state, Auth) {
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

    if(!('data' in toState) || !('access' in toState.data)) {
      $rootScope.error = "Access undefined for this state"
      event.preventDefault()
    }
    else if (!Auth.authorize(toState.data.access)) {
      $rootScope.error = "Seems like you tried accessing a route you don't have access to..."
      event.preventDefault()

      if(fromState.url === '^') {
        if(Auth.isLoggedIn()) {
          $state.go('user.home')
        } else {
          $rootScope.error = null
          $state.go('anon.login')
        }
      }
    }
  })
})
