'use strict';

var pageModule = angular.module('contactPageModule', [])

pageModule.controller('ContactCtrl', require('./controller/index'))

pageModule.routings = require('./routes')
module.exports = pageModule
