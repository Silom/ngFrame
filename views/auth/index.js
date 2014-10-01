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

// Auth behaviour
authModule.run(['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    // if next.data will check if any validation role is given
    if (next.data) {
      if (!AuthService.isAuthorized(next.data.authorizedRoles)) {
        event.preventDefault()
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized)
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated)
        }
      }
    }
  })
}])

authModule.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push(['$injector', function ($injector) {
    return $injector.get('AuthInterceptor')
  }])
}])

module.exports = authModule
