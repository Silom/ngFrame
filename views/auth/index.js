'use strict';

var authModule = angular.module('client-side-auth', [])

authModule.controller('NavCtrl', require('./controller/nav'))
authModule.controller('LoginCtrl', require('./controller/login'))
authModule.controller('RegisterCtrl', require('./controller/register'))
authModule.controller('AdminCtrl', require('./controller/admin'))

authModule.directive('accessLevel', require('./directives').accessLevel)
authModule.directive('activeNav', require('./directives').activeNav)

authModule.factory('Auth', require('./services').Auth)
authModule.factory('Users', require('./services').Users)

module.exports = authModule
