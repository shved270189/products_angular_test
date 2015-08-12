(function() {
  'use strict';

  angular
    .module('productsTestAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Products, $scope, _) {
    $scope.searchCategory = '';
    $scope.paginatedProductsList = [];
    $scope.filteredProductsList = [];
    $scope.productsList = [];

    $scope.itemsPerPage = 10;

    $scope.totalItems = 0;
    $scope.currentPage = 1;

    $scope.editProductIds = [];

    Products.all().$promise.then(function(data) {
      $scope.productsList = data;
      $scope.filterProducts();
    });

    $scope.pageChanged = function() {

      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
      var end = begin + $scope.itemsPerPage;

      $scope.paginatedProductsList = $scope.filteredProductsList.slice(begin, end);
    };

    $scope.filterProducts = function() {
      if ($scope.searchCategory.length > 0) {
        $scope.filteredProductsList = _.filter($scope.productsList, function(product){ return product.category === $scope.searchCategory; });
      } else {
        $scope.filteredProductsList = $scope.productsList;
      }
      $scope.currentPage = 1;
      $scope.totalItems = $scope.filteredProductsList.length;
      $scope.pageChanged();
    };

    $scope.resetSearch = function() {
      $scope.searchCategory = '';
      $scope.filteredProductsList = $scope.productsList;
      $scope.currentPage = 1;
      $scope.totalItems = $scope.filteredProductsList.length;
      $scope.pageChanged();
    };
  }
})();
