'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.contact', {
    url: '/contact/',
    template: require('./partials/index.jade'),
    controller: 'ContactCtrl'
  })
}
