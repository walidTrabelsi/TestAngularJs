'use strict';

describe('Controller: HoferCtrl', function () {

  // load the controller's module
  beforeEach(module('testAngularJsApp'));

  var HoferCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HoferCtrl = $controller('HoferCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
