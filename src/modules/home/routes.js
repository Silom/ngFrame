'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.home', {
    url: '/',
    template: require('./partials/index.jade')
  })
}
