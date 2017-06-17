'use strict';

var REST_URL = '/sortapp', config, moduleName = 'frontend';

var app = angular.module('frontend', [ 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngjQuery', 'ui.bootstrap', 'ngTable', 'ngFileUpload', 'angular-growl', 'angular.vertilize', 'ngTagsInput', 'ui.select', 'ae-datetimepicker', 'blockUI' ]);

function fetchData() {
	var initInjector = angular.injector([ 'ngResource' ]), $resource = initInjector.get('$resource');
	return $resource(REST_URL + '/rest/user/v1/session').get().$promise;
}
/** app setup * */
function appSetup(root) {
	root.REST_URL = REST_URL;
}
appSetup.$inject = [ '$rootScope' ];

function appConfig($httpProvider) {
	// initialize get if not there
	if (!$httpProvider.defaults.headers.get) {
		$httpProvider.defaults.headers.get = {};
	}
	// disable IE ajax request caching
	$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.get.Pragma = 'no-cache';
}

function bootstrapApplication(response) {
	config = response;
	app.run(appSetup);
	app.config(appConfig);
	/*angular.element(document).ready(function() {
		angular.bootstrap(document, [ moduleName ]);
	});*/
}

//fetchData().then(bootstrapApplication);
bootstrapApplication();
app.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('httpPageNotFoundInterceptor');

} ]);
/*
 * app.config(['$httpProvider', function ($httpProvider) {
 * $httpProvider.interceptors.push('httpPageNotFoundInterceptor');
 * 
 * }]);
 */

app.factory('httpPageNotFoundInterceptor', [ '$q', '$rootScope', '$location', function($q, $rootScope, $location) {
	console.log(' inside page not found interceptor::');
	return {
		'responseError' : function(rejection) {
			if (rejection.status === 401) {
				$location.path('/403', true);
				return $q.reject(rejection);
			} else if (rejection.status === 403) {
				$location.path('/403', true);
				return $q.reject(rejection);
			} else if (rejection.status === 404) {
				$location.path('/404', true);
				return $q.reject(rejection);
			} else if (rejection.status >= 500) {
				$location.path('/500', true);
				return $q.reject(rejection);
			}
			return rejection || $q.when(rejection);

		}
	};
} ]);

app.config([ 'growlProvider', 'blockUIConfig', function(growlProvider, blockUIConfig) {
	growlProvider.globalTimeToLive(5000);

	blockUIConfig.requestFilter = function(config) {
		// If the request starts with '/rest/user' ...
		
	};
} ]);

