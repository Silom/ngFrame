'use strict';

var pageModule = angular.module('contactPageModule', [])

pageModule.controller('ContactCtrl', require('./controller/index'))

pageModule.factory('ContactService', require('./service/contact'))

pageModule.routings = require('./routes')
module.exports = pageModule
