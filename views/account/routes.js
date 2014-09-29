'use strict';

module.exports = function ($stateProvider, USER_ROLES) {
  $stateProvider
  .state('account', {
    url: '/account/',
    templateUrl: __dirname + '/partials/index.html',
    data: {
      authorizedRoles: [USER_ROLES.user]
    }
  })
}
