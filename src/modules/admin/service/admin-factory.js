'use strict';

module.exports = function ($http) {

  return {
    getStatuses: function (filter, success, error) {
      $http.get('/api/statuses', filter).success(function(res) {
        success(res)
      }).error(error)
    },
    getStatus: function (id, success, error) {
      $http.get('/api/statuses/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    addStatus: function (status, success, error) {
      $http.post('/api/statuses', status).success(function(res) {
        success(res)
      }).error(error)
    },
    updateStatus: function (id, status, success, error) {
      $http.put('/api/statuses/' + id, status).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteStatus: function (id, success, error) {
      $http.delete('/api/statuses/' + id).success(function(res) {
        success(res)
      }).error(error)
    },


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
    addAccount: function (account, success, error) {
      $http.post('/api/accounts', account).success(function(res) {
        success(res)
      }).error(error)
    },
    updateAccount: function (id, account, success, error) {
      $http.put('/api/account/' + id, account).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteAccount: function (id, success, error) {
      $http.delete('/api/account/' + id).success(function(res) {
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
