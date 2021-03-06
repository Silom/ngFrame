'use strict';

module.exports = function ($http) {
  return {
    updateName: function (submission, success, error) {
      $http.put('/api/accounts/my', submission).success(function(res) {
        success()
      }).error(error)
    },
    getAccount: function (success, error) {
      $http.get('/api/accounts/my').success(function(res) {
        success(res)
      }).error(error)
    }
  }
}
