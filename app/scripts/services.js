'use strict';

var qualysoftWebshopServices = angular.module('qualysoftWebshopServices', ['ngResource']);

qualysoftWebshopServices.factory('ProductService', ['$resource',
    function($resource) {
        return $resource('http://localhost:8080/QualysoftWebshop-war/rest/product/:productId', {}, {
            query: {method: 'GET', params: {productId: ''}, isArray: true}
        });
    }]);
