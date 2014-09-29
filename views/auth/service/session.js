'use strict';

module.exports = ['Restangular', '$cookies', '$cookieStore', function (Restangular, $cookies, $cookieStore) {
  this.create = function (sessionKey, userId, userRole) {
    this.key = sessionKey
    this.username = userId
    this.userRole = userRole

    Restangular.setDefaultHeaders({
      authorization: 'Basic ' + new Buffer(this.username + ':' + this.key).toString('base64')
    })

    // set cookies
    $cookieStore.put('username', this.username)
    $cookieStore.put('key', this.key)
  }

  this.destroy = function () {
    this.key = null
    this.username = null
    this.userRole = null

    // Hmm... how to delete the header proper
    Restangular.setDefaultHeaders({
      authorization: ''
    })

    // delete cookie
    $cookieStore.remove('username')
    $cookieStore.remove('key')
  }

  return this
}]
