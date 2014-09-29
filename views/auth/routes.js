'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('login', {
    url: '/login/',
    templateUrl: __dirname + '/partials/login.html'
  })
  .state('signup', {
    url: '/signup/',
    templateUrl: __dirname + '/partials/signup.html'
  })
}
