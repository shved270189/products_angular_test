(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController($scope, _) {
    $scope.isEditing = false;

    var primaryProduct = _.clone($scope.product);

    $scope.startEdit = function() {
      $scope.isEditing = true;
    };

    $scope.stopEdit = function() {
      $scope.isEditing = false;
      revertProduct();
    };

    var revertProduct = function() {
      $scope.product.name = primaryProduct.name;
      $scope.product.sku = primaryProduct.sku;
      $scope.product.category = primaryProduct.category;
    };

    $scope.updateProduct = function() {
      if ($scope.nameForm.name.$valid && $scope.skuForm.sku.$valid && $scope.categoryForm.category.$valid) {
        $scope.product.$update().then(function() {
          $scope.isEditing = false;
          primaryProduct = _.clone($scope.product);
        }, function() {
        });
      }
    };
  }
})();
