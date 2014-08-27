'use strict';

/**
 * @ngdoc function
 * @name qualysoftWebshopApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the qualysoftWebshopApp
 */
angular.module('qualysoftWebshopApp')
        .controller('ProductsCtrl', function($scope, ProductService) {
            $scope.products = ProductService.query();
        });
