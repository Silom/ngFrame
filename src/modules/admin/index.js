'use strict';

var pageModule = angular.module('adminPageModule', [])

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
    template: require('./partials/status/index.jade'),
    controller: require('./controller/status/index.js')
  })
  .state('admin.statusdetail', {
    url: 'statuses/:id/',
    template: require('./partials/status/detail.jade'),
    controller: require('./controller/status/detail.js')
  })

  // User Areas
  $stateProvider
  .state('admin.userlist', {
    url: 'users/',
    template: require('./partials/user/index.jade'),
    controller: require('./controller/user/index.js')
  })
  .state('admin.userdetail', {
    url: 'users/:id/',
    template: require('./partials/user/detail.jade'),
    controller: require('./controller/user/detail.js')
  })

  // Account Areas
  $stateProvider
  .state('admin.accountlist', {
    url: 'accounts/',
    template: require('./partials/account/index.jade'),
    controller: require('./controller/account/index.js')
  })
  .state('admin.accountdetail', {
    url: 'accounts/:id/',
    template: require('./partials/account/detail.jade'),
    controller: require('./controller/account/detail.js')
  })

  // Admin Areas
  $stateProvider
  .state('admin.adminlist', {
    url: 'administrators/',
    template: require('./partials/admin/index.jade'),
    controller: require('./controller/admin/index.js')
  })
  .state('admin.admindetail', {
    url: 'administrators/:id/',
    template: require('./partials/admin/detail.jade'),
    controller: require('./controller/admin/detail.js')
  })

  // Admin Groups
  $stateProvider
  .state('admin.grouplist', {
    url: 'admin-groups/',
    template: require('./partials/admin-group/index.jade'),
    controller: require('./controller/admin-group/index.js')
  })
  .state('admin.groupdetail', {
    url: 'admin-groups/:id/',
    template: require('./partials/admin-group/detail.jade'),
    controller: require('./controller/admin-group/detail.js')
  })
}

module.exports = pageModule
