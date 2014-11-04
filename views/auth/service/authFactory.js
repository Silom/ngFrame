'use strict';

module.exports = function($http, $cookieStore) {

  var accessLevels = require('../routingConfig.js').accessLevels,
      userRoles = require('../routingConfig.js').userRoles,
      currentUser = $cookieStore.get('user') || { username: '', role: userRoles.public }

  $cookieStore.remove('user')

  function changeUser(user) {
    angular.extend(currentUser, user)
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
          role: {}
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

        metaUser.role = getRole(user.user)
        metaUser.username = user.user.username

        changeUser(metaUser)
        success(metaUser)
      }).error(error)
    },
    logout: function(success, error) {
      $http.post('/api/logout').success(function() {
        changeUser({
          username: '',
          role: userRoles.public
        })
        success()
      }).error(error)
    },
    accessLevels: accessLevels,
    userRoles: userRoles,
    user: currentUser
  }
}
