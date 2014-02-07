'use strict';

var myApp = angular.module('projet1App', [
  'ngResource',
  'ngRoute'
]);
myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/about',{
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
