'use strict';

module.exports = function ($http) {

  return {
    contact: function (credentials, success, error) {
      $http.post('/api/contact', credentials).success(function(res) {
        success()
      }).error(error)
    }
  }

}
