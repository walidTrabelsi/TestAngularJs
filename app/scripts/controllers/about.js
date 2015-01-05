'use strict';

/**
 * @ngdoc function
 * @name testAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAngularJsApp
 */
angular.module('testAngularJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
