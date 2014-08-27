'use strict';

describe('Controller: ProductsCtrl', function() {
    // load the controller's module
    beforeEach(module('qualysoftWebshopApp'));
    beforeEach(module('qualysoftWebshopServices'));

    var ProductsCtrl,
            scope,
            $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('product').
                respond([
                    {id: 1, name: 'Product 1', description: 'Description 1'},
                    {id: 2, name: 'Product 2', description: 'Description 2'},
                    {id: 3, name: 'Product 3', description: 'Description 3'},
                    {id: 4, name: 'Product 4', description: 'Description 4'},
                    {id: 5, name: 'Product 5', description: 'Description 5'},
                ]);

        scope = $rootScope.$new();
        ProductsCtrl = $controller('ProductsCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of products to the scope', function() {
        expect(scope.products.length).toBe(0);

        $httpBackend.flush();

        expect(scope.products.length).toBe(5);
    });
});
