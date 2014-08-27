'use strict';

/**
 * @ngdoc function
 * @name qualysoftWebshopApp.controller:ProductDetailCtrl
 * @description
 * # ProductDetailCtrl
 * Controller of the qualysoftWebshopApp
 */
angular.module('qualysoftWebshopApp')
        .controller('ProductDetailCtrl', function($scope, $routeParams, ProductService) {
            $scope.productId = parseInt($routeParams.productId, 10);
    
            $scope.product = ProductService.get({productId: $scope.productId});
        });
