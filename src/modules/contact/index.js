'use strict';

var pageModule = angular.module('contactPageModule', [])

pageModule.controller('ContactCtrl', require('./controller/index'))

pageModule.factory('ContactService', require('./service/contact'))

pageModule.routings = function ($stateProvider, access) {
  $stateProvider
  .state('public.contact', {
    url: '/contact/',
    template: require('./partials/index.jade'),
    controller: 'ContactCtrl'
  })
}

module.exports = pageModule
