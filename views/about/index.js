'use strict';

var pageModule = angular.module('aboutPageModule', [])

pageModule.controller('AboutCtrl', require('./controller/index'))

pageModule.routings = require('./routes')
module.exports = pageModule
