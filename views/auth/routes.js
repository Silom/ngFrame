'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
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
}
