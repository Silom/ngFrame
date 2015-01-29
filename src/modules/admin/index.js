'use strict';

var pageModule = angular.module('adminPageModule', [])

// pageModule.controller('AdminAccountController', require('./controller/account.js'))
pageModule.factory('AdminAccountService', require('./service/account-factory'))


pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('admin.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })
  .state('admin.userlist', {
    url: 'users/',
    template: require('./partials/users/index.jade'),
    controller: require('./controller/user.js')
  })
  .state('admin.userdetail', {
    url: 'users/:id/',
    template: require('./partials/users/detail.jade'),
    controller: require('./controller/user-detail.js')
  })
  // .state('admin.accountlist', {
  //   url: 'accounts/',
  //   template: require('./partials/account/index.jade'),
  //   controller: 'AdminAccountController'
  // })
}

module.exports = pageModule
