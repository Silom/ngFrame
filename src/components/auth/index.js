'use strict';

var authModule = angular.module('client-side-auth', [
  require('./service/local-storage').name
])

authModule.directive('accessLevel', require('./directive/access-level'))
authModule.factory('Auth', require('./service/auth-factory'))

module.exports = authModule
