'use strict';
angular.module('frontend').provider('$appConfiguration', function() {
	var defaults = {
		userSessionApi : '/'
	};
	var settings = defaults;
	this.configure = function(configs) {
		configs = configs || {};
		settings = angular.extend(defaults, configs);
	};
	this.$get = [ '$rootScope', '$location', 'jQuery', function($rootScope, $location, jQuery) {
		jQuery.ajax(settings.userSessionApi, {
			async : false
		}).success(function(data) {
			$rootScope.user = data;
		}).fail(function(response) {
			console.log(response);
		});
	} ];
}).run([ '$appConfiguration', function($appConfiguration) {
} ]);