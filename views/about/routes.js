'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('about', {
    url: '/about/',
    templateUrl: __dirname + '/partials/index.html'
  })
}
