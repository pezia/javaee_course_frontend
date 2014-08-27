'use strict';

var qualysoftWebshopServices = angular.module('qualysoftWebshopServices', ['ngResource']);

qualysoftWebshopServices.factory('ProductService', ['$resource',
    function($resource) {
        return $resource('product/:productId', {}, {
            query: {method: 'GET', params: {productId: ''}, isArray: true}
        });
    }]);
