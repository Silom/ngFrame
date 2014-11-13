'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.home', {
    url: '/',
    templateUrl: 'home'
  })
}
