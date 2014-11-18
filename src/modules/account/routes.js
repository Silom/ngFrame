'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('account.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })
}
