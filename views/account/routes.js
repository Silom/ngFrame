'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('account', {
    url: '/account/',
    templateUrl: __dirname + '/partials/index.html'
  })
}


/*
    .state('user.private', {
        abstract: true,
        url: '/private/',
        templateUrl: 'private/layout'
    })
    .state('user.private.home', {
        url: '',
        templateUrl: 'private/home'
    })
    .state('user.private.nested', {
        url: 'nested/',
        templateUrl: 'private/nested'
    })
    .state('user.private.admin', {
        url: 'admin/',
        templateUrl: 'private/nestedAdmin',
        data: {
            access: access.admin
        }
    })
*/
