'use strict';

/**
 */
angular.module('testAngularJsApp')
  .controller('PennyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.comboboxModel = [{value:'1', text:'walid'},
                            {value:'2', text: 'shams'},
                            {value:'3', text: 'olfa'}
                           ];


  });
