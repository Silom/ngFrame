'use strict';
var localStorage = require('./service/localStorage')
var authModule = angular.module('client-side-auth', [localStorage.name])

authModule.controller('NavCtrl', require('./controller/nav'))
authModule.controller('LoginCtrl', require('./controller/login'))
authModule.controller('RegisterCtrl', require('./controller/register'))
authModule.controller('AdminCtrl', require('./controller/admin'))

authModule.directive('accessLevel', require('./directives').accessLevel)
authModule.directive('activeNav', require('./directives').activeNav)

authModule.factory('Auth', require('./service/authFactory'))
authModule.factory('Users', require('./service/usersFactory'))

module.exports = authModule
