'use strict';

module.exports = ['$http', 'Restangular', 'Session', function ($http, Restangular, Session) {
  var authService = {}
  Restangular.setBaseUrl('/')

  authService.login = function (credentials) {
    return Restangular.service('login').post(credentials)
    .then(function (res) {
      Session.create(res.session.key, res.session.username, 'user')
      return {name: res.session.username, role: 'user'}
    })
  }

  authService.logout = function () {
    return Restangular.one('logout').remove()
    .then(function(res) {
      Session.destroy()
    })
  }

  authService.signup = function (credentials) {
    return Restangular.service('signup').post(credentials)
    .then(function(res) {
      return true
    })
  }

  authService.isAuthenticated = function () {
    return !!(Session.username && Session.key)
  }

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles))
      authorizedRoles = [authorizedRoles]

    return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1)
  }

  return authService
}]

/*
    signup: function (name, username, password, email, callback) {
      return
    },

  }
}]*/
