'use strict';

var pageModule = angular.module('adminPageModule', [])

// pageModule.controller('AdminAccountController', require('./controller/account.js'))
pageModule.factory('AdminService', require('./service/admin-factory'))


pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('admin.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })

  // Statuses Areas
  $stateProvider
  .state('admin.statuslist', {
    url: 'statuses/',
    template: require('./partials/statuses/index.jade'),
    controller: require('./controller/status.js')
  })
  .state('admin.statusdetail', {
    url: 'statuses/:id/',
    template: require('./partials/statuses/detail.jade'),
    controller: require('./controller/status-detail.js')
  })

  // User Areas
  $stateProvider
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

  // Account Areas
  // $stateProvider
  // .state('admin.accountlist', {
  //   url: 'accounts/',
  //   template: require('./partials/account/index.jade'),
  //   controller: require('./controller/account.js')
  // })
  // .state('admin.accountdetail', {
  //   url: 'accounts/:id/',
  //   template: require('./partials/account/detail.jade'),
  //   controller: require('./controller/account-detail.js')
  // })

  // Admin Areas
  // $stateProvider
  // .state('admin.adminlist', {
  //   url: 'admins/',
  //   template: require('./partials/admins/index.jade'),
  //   controller: require('./controller/admin.js')
  // })
  // .state('admin.admindetail', {
  //   url: 'admins/:id/',
  //   template: require('./partials/admins/detail.jade'),
  //   controller: require('./controller/admin-detail.js')
  // })
}

module.exports = pageModule
