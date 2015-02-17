'use strict';
module.exports = function(localStorageService, $http) {

  var accessLevels = require('../routingConfig.js').accessLevels,
      userRoles = require('../routingConfig.js').userRoles,
      basicUserObject = { username: '', role: userRoles.public, key: null, id: null },
      currentUser = localStorageService.get('userStorage') || basicUserObject

  if (currentUser.key)
    setAuthHeader(currentUser)

  function setAuthHeader(user) {
    $http.defaults.headers.common['Authorization'] = user.authHeader
  }

  function changeUser(user) {
    angular.extend(currentUser, user)
    setAuthHeader(user)
  }

  function saveUser(user) {
    localStorageService.set('userStorage', user)
  }

  return {
    isLoggedIn: function() {
      if (currentUser.username || currentUser.key || currentUser.id)
        return true
      return false
    },
    getUser: function () {
      return currentUser
    },
    authorize: function(accessLevel, role) {
      if (role === undefined)
        role = currentUser.role

      return accessLevel.bitMask & role.bitMask
    },
    register: function(user, success, error) {
      $http.post('/api/signup', user).success(function(res) {
        success()
      }).error(error)
    },
    login: function(user, success, error) {
      $http.post('/api/login', user).success(function(user) {
        var metaUser = {
          isStored: true,
          username: '',
          role: {},
          key: null,
          id: null
        }

        // I assume there is only one user role, but I have to check on that one TODO
        function getRole(userObj) {
          for (var name in userObj.roles) {
            if (userObj.roles.hasOwnProperty(name)) {
              switch(name) {
                case 'admin':
                  return userRoles.admin
                  break
                case 'account':
                  return userRoles.user
                  break
                default:
                  return userRoles.public
              }
            }
          }
          //new users don't get a role by default from frame FIXME
          return userRoles.user
        }

        metaUser.id = user.user._id
        metaUser.key = user.session.key
        metaUser.role = getRole(user.user)
        metaUser.username = user.user.username
        metaUser.authHeader = user.authHeader

        changeUser(metaUser)
        saveUser(metaUser)
        success(metaUser)
      }).error(error)
    },
    logout: function(success, error) {
      $http.delete('/api/logout').success(function() {
        success()
      }).error(error)

      // Empty even on failure, so the user is not confused. On a 'relogin' the server will provide the same key again.
      localStorageService.remove('userStorage')
      changeUser(basicUserObject)
    },
    accessLevels: accessLevels,
    userRoles: userRoles,
    user: currentUser
  }
}
