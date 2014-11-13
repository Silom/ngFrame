'use strict';

module.exports = function($http) {
  return {
    getAll: function(success, error) {
      $http.get('/api/users').success(success).error(error)
    }
  }
}
