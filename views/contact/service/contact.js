'use strict';

module.exports = ['Restangular', function (Restangular) {
  var service = {}

  service.contact = function (credentials) {
    return Restangular.service('contact').post(credentials)
    .then(function (res) {
      return true
    })
  }

  return service
}]
