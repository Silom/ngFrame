'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('public.about', {
    url: '/about/',
    template: require('./partials/index.jade')
  })
}
