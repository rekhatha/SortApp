'use strict';

angular.module('frontend').config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'app/hmsort/sortNumbers.html',
        controller: 'sortController'
      }) 
     
	 
      .otherwise({
        redirectTo: '404'
      });
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  
      
  });