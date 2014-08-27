'use strict';

describe('Controller: ProductsCtrl', function() {

    // load the controller's module
    beforeEach(module('qualysoftWebshopApp'));
    beforeEach(module('qualysoftWebshopServices'));

    var productDetailCtrl, scope, $httpBackend;

    function setupContext(id) {
        inject(function(_$httpBackend_, $controller, $rootScope) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://localhost:8080/QualysoftWebshop-war/rest/product/' + id).
                    respond({id: id, name: 'Product ' + id, description: 'Description ' + id});

            scope = $rootScope.$new();
            productDetailCtrl = $controller('ProductDetailCtrl', {
                $scope: scope,
                $routeParams: {
                    productId: '' + id
                }
            });
        });
    }

    it('should attach a product ID and a product to the scope based the route parameter\'s ID when ID = 1', function() {
        setupContext(1);
        expect(scope.productId).toBe(1);
        expect(scope.product.id).toBe(undefined);

        $httpBackend.flush();

        expect(scope.product.id).toBe(1);
    });

    it('should attach a product ID and a product to the scope based the route parameter\'s ID when ID = 2', function() {
        setupContext(2);
        expect(scope.productId).toBe(2);
        expect(scope.product.id).toBe(undefined);

        $httpBackend.flush();

        expect(scope.product.id).toBe(2);
    });
});
