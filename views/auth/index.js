'use strict';

var authModule = angular.module('authModule', [])

authModule.constant('AUTH_EVENTS', require('./constant/auth_events'))
authModule.constant('USER_ROLES', require('./constant/user_roles'))

authModule.controller('UserInformationCtrl', require('./controller/userInformation'))
authModule.controller('LoginCtrl', require('./controller/login'))
authModule.controller('SignupCtrl', require('./controller/signup'))
authModule.controller('LogoutCtrl', require('./controller/logout'))

authModule.factory('AuthInterceptor', require('./service/authInterceptor'))
authModule.factory('AuthService', require('./service/auth'))
authModule.service('Session', require('./service/session'))

authModule.routings = require('./routes')

module.exports = authModule
