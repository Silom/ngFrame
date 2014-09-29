'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: __dirname + '/partials/index.html'
  })
}
