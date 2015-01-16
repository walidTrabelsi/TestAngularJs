'use strict';

/**
 * @ngdoc function
 * @name testAngularJsApp.controller:AboutCtrl
 * @description
 * # HoferCtrl
 * Controller of the testAngularJsApp
 */
angular.module('testAngularJsApp')
  .controller('HoferCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.walidList = [{name:'test55', lastname:'test66'}, {adress:'test77'}];

    $scope.logToConsol = function(){
      if($scope.myModel!== undefined && $scope.myModel.length > 0){
          console.log($scope.myModel);
       }
    };
    console.log($scope.walidList);
  });
