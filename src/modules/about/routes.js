'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.about', {
    url: '/about/',
    templateUrl: 'about'
  })
}
