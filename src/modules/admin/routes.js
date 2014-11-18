'use strict';

module.exports = function ($stateProvider, access) {
  $stateProvider
  .state('admin.dashboard', {
    url: '',
    template: require('./partials/index.jade')
  })
}
