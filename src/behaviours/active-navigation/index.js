'use strict';

var ngModule = angular.module('activeNavigation', [])

ngModule.directive('activeNav', require('./directive/active-nav'))

module.exports = ngModule
