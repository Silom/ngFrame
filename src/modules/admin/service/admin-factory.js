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
      $http.put('/api/accounts/' + id, account).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteAccount: function (id, success, error) {
      $http.delete('/api/accounts/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    accountLinkUser: function (id, user, success, error) {
      $http.put('/api/accounts/'+ id +'/user', user).success(function(res) {
        success(res)
      }).error(error)
    },
    accountUnlinkUser: function (id, success, error) {
      $http.delete('/api/accounts/'+ id +'/user').success(function(res) {
        success(res)
      }).error(error)
    },
    accountAddNote: function (id, input, success, error) {
      $http.post('/api/accounts/'+ id +'/notes', input).success(function(res) {
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
    addUser: function (user, success, error) {
      $http.post('/api/user', user).success(function(res) {
        success(res)
      }).error(error)
    },
    updateUser: function (id, user, success, error) {
      $http.put('/api/users/' + id, user).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteUser: function (id, success, error) {
      $http.delete('/api/users/' + id).success(function(res) {
        success(res)
      }).error(error)
    },


    getAdmins: function (filter, success, error) {
      $http.get('/api/admins', filter).success(function(res) {
        success(res)
      }).error(error)
    },
    getAdmin: function (id, success, error) {
      $http.get('/api/admins/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    addAdmin: function (admin, success, error) {
      $http.post('/api/admins', admin).success(function(res) {
        success(res)
      }).error(error)
    },
    updateAdmin: function (id, user, success, error) {
      $http.put('/api/admins/' + id, user).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteAdmin: function (id, success, error) {
      $http.delete('/api/admins/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    adminLinkUser: function (id, user, success, error) {
      $http.put('/api/admins/'+ id +'/user', user).success(function(res) {
        success(res)
      }).error(error)
    },
    adminUnlinkUser: function (id, success, error) {
      $http.delete('/api/admins/'+ id +'/user').success(function(res) {
        success(res)
      }).error(error)
    },


    getAdminGroups: function (filter, success, error) {
      $http.get('/api/admin-groups', filter).success(function(res) {
        success(res)
      }).error(error)
    },
    getAdminGroup: function (id, success, error) {
      $http.get('/api/admin-groups/' + id).success(function(res) {
        success(res)
      }).error(error)
    },
    addAdminGroup: function (group, success, error) {
      $http.post('/api/admin-groups', group).success(function(res) {
        success(res)
      }).error(error)
    },
    updateAdminGroup: function (id, user, success, error) {
      $http.put('/api/admin-groups/' + id, user).success(function(res) {
        success(res)
      }).error(error)
    },
    deleteAdminGroup: function (id, success, error) {
      $http.delete('/api/admin-groups/' + id).success(function(res) {
        success(res)
      }).error(error)
    }
  }

}
