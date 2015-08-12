(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .factory('_', underscore);

  function underscore($window) {
    return $window._;
  }

})();
