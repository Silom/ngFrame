'use strict';

var pageModule = angular.module('accountPageModule', [])

pageModule.controller('AccountCtrl', require('./controller/account'))

pageModule.routings = require('./routes')
module.exports = pageModule
