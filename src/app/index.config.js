(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
