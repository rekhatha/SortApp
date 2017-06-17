(function (angular, jQuery) {
  'use strict';

  var module = angular.module('ngjQuery', []);

  module.factory('jQuery', function () {
    return jQuery; // assumes Jquery has already been loaded on the page
  });

})(window.angular, window.jQuery);