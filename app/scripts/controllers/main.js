'use strict';

/**
 * @ngdoc function
 * @name qualysoftWebshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qualysoftWebshopApp
 */
angular.module('qualysoftWebshopApp')
        .controller('MainCtrl', function($scope) {
            $scope.awesomeThings = [
                {name: 'HTML5 Boilerplate', description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
                {name: 'Angular', description: 'AngularJS is a toolset for building the framework most suited to your application development.'},
                {name: 'Karma', description: 'Spectacular Test Runner for JavaScript.'}
            ];
        });
