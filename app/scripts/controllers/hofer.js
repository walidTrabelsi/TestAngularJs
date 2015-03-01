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

    $scope.walidList = [{name:'name1', lastname:'lastname1', adress:'adress1'},
                        {name:'name2', lastname:'lastname2', adress:'adress2'}
                       ];

    $scope.logToConsol = function(){
    var modelValue = $scope.myTestModel;
      if(modelValue!== undefined && modelValue.length > 0){
          console.log(modelValue);
          // put the input into jason object
          var myObject = {name:modelValue +' --> manipulated', lastname:'trabelsi'};
          console.log(myObject.name + ' -------- ' + myObject.lastname);
       }
    };

   // console.log($scope.walidList);

   //console.log($scope.myTestModel)
  });
