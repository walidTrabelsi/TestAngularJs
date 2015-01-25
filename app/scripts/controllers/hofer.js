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
      if($scope.myTestModel!== undefined && $scope.myTestModel.length > 0){
          console.log($scope.myTestModel);
          // put the input into jason object
          var myObject = {name:$scope.myTestModel +'manipulated', lastname:'trabelsi'};
          console.log(myObject.name);
       }
    };

   // console.log($scope.walidList);

   //console.log($scope.myTestModel)
  });
