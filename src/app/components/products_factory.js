(function() {
    'use strict';

    angular
        .module('productsTestAngular')
        .factory('Products', products);

    function products(domain_name, $resource) {
        var Product = $resource(domain_name + '/products/:productId', {productId:'@id'}, {update: {method: 'PUT'}});
        var getAll = function() {
            return Product.query();
        };

        return {
            all: getAll
        };
    }

})();
