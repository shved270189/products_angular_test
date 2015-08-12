(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .directive('productRow', productRow);

  function productRow() {
    return {
      restrict: 'C',
      templateUrl: 'app/components/product/product.html',
      scope: {
        product: '=',
        index: '='
      },
      controller: 'ProductController',
      controllerAs: 'prod'
    };
  }
})();
