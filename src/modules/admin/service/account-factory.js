'use strict';

module.exports = function ($http) {

  return {
    getAccounts: function (filter, success, error) {
      $http.get('/api/accounts', filter).success(function(res) {
        success(res)
      }).error(error)
    },
    getAccount: function (id, success, error) {
      $http.get('/api/accounts/' + id).success(function(res) {
        success(res)
      }).error(error)
    },


    getUsers: function (filter, success, error) {
      $http.get('/api/users', filter).success(function(res) {
        success(res)
      }).error(error)
    },
    getUser: function (id, success, error) {
      $http.get('/api/users/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    updateUser: function (id, user, success, error) {
      $http.put('/api/users/' + id, user).success(function(res) {
        success(res)
      }).error(error)
    }
  }

}
