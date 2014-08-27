'use strict';

/**
 * @ngdoc overview
 * @name qualysoftWebshopApp
 * @description
 * # qualysoftWebshopApp
 *
 * Main module of the application.
 */
angular.module('qualysoftWebshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'qualysoftWebshopServices'
]).config(function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl'
            })
            .when('/product/:productId', {
                templateUrl: 'views/product_detail.html',
                controller: 'ProductDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});
