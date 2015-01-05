'use strict';

/**
 * @ngdoc function
 * @name testAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularJsApp
 */
angular.module('testAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
