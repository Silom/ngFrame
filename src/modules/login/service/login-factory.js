'use strict';

module.exports = function ($http) {
  return {
    forgot: function (submission, success, error) {
      $http.post('/api/login/forgot', submission).success(function(res) {
        success()
      }).error(error)
    },
    reset: function (submission, success, error) {
      $http.post('/api/login/reset', submission).success(function(res) {
        success()
      }).error(error)
    }
  }
}
