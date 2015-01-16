'use strict';

/**
 * @ngdoc overview
 * @name testAngularJsApp
 * @description
 * # testAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/hofer', {
        templateUrl: 'views/hofer.html',
        controller: 'HoferCtrl'
      })
      .when('/penny',{
        templateUrl: 'views/penny.html', 
        controller: 'PennyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
