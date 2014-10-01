'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('contact', {
    url: '/contact/',
    templateUrl: __dirname + '/partials/index.html'
  })
}
