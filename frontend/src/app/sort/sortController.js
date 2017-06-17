(function(angular) {
	'use strict';
	angular.module('frontend').run(function($rootScope) {
		$rootScope.REST_URL = 'http://localhost:8090/';
	}).controller('sortController', function($scope, $route, $resource, $rootScope) {
		
		 $scope.sortNumbers = null;
		 $scope.resultArray = null;
		 $scope.timeConsumed = null;
		 $scope.result= null;
		
		$scope.sortNumber = function() {
		
			 console.log($scope.sortNumbers);
			var resource = $resource('http://localhost:8090/sortToAscending');
			resource.get({numbers:$scope.sortNumbers},function(response){
				console.log(response);
				 $scope.result = true;
				 $scope.resultArray = response.resultArray;
				 $scope.timeConsumed = response.timeConsumned;
			});
				
		};
		
		$scope.reset = function(){
			$scope.sortForm.$setPristine();
		}		

	});
})(window.angular);