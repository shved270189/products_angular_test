(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
