'use strict';
module.exports = function(localStorageService, $http) {

  var accessLevels = require('../routingConfig.js').accessLevels,
      userRoles = require('../routingConfig.js').userRoles,
      currentUser = localStorageService.get('userStorage') || { username: '', role: userRoles.public, key: null }

  if (currentUser.key)
    setAuthHeader(currentUser)

  function setAuthHeader(user) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + new Buffer(user.username + ':' + user.key).toString('base64')
  }

  function changeUser(user) {
    angular.extend(currentUser, user)
    localStorageService.set('userStorage', user)
    setAuthHeader(user)
  }

  return {
    authorize: function(accessLevel, role) {
      if (role === undefined)
        role = currentUser.role

      return accessLevel.bitMask & role.bitMask
    },
    isLoggedIn: function(user) {
      if (user === undefined)
        user = currentUser
      return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title
    },
    register: function(user, success, error) {
      $http.post('/api/register', user).success(function(res) {
        changeUser(res)
        success()
      }).error(error)
    },
    login: function(user, success, error) {
      $http.post('/api/login', user).success(function(user) {
        var metaUser = {
          username: '',
          role: {},
          key: ''
        }

        // I assume there is only one user role, but I have to check on that one TODO
        function getRole(userObj) {
          for (var name in userObj.roles) {
            if (userObj.roles.hasOwnProperty(name)) {
              switch(name) {
                case 'admin':
                  return userRoles.admin
                  break
                case 'user':
                  return userRoles.user
                  break
                default:
                  return userRoles.public
              }
            }
          }
        }

        metaUser.key = user.session.key
        metaUser.role = getRole(user.user)
        metaUser.username = user.user.username

        changeUser(metaUser)
        success(metaUser)
      }).error(error)
    },
    logout: function(success, error) {
      $http.delete('/api/logout').success(function() {
        success()
      }).error(error)

      // Empty even on failure, so the user is not confused. On a 'relogin' the server will provide the same key again.
      localStorageService.remove('userStorage')
      changeUser({
        username: '',
        role: userRoles.public
      })
    },
    accessLevels: accessLevels,
    userRoles: userRoles,
    user: currentUser
  }
}
