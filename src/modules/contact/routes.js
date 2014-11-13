'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.contact', {
    url: '/contact/',
    templateUrl: 'contact',
    controller: 'ContactCtrl'
  })
}
