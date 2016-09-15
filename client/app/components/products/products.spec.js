import 'script!jquery/dist/jquery';
import angular from 'angular';
import ngMockHttp from 'ngMockHttp';

import {products} from './products';

describe('Products page', () => {
  let $scope;
  let $location;
  let $state;

  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<products></products>');
  };

  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(products.name));

  beforeEach(window.inject(($rootScope, $compile, $httpBackend, _$state_, _$location_) => {
    $httpBackend.whenGET(/.*/).passThrough();
    $scope = $rootScope.$new();
    $state = _$state_;
    $location = _$location_;

    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should say', () => {
    it('console logs', (done) => {
      setTimeout(function() {
        done();
      }, 1000);

    });

    it('hello world', () => {
      ($(element).find('.products-title').text()).should.equal('hello world');
    });

    it('on the product page', () => {
      $location.path('/products');
      $scope.$apply();

      ($state.current.url).should.equal('/products');
      ($state.current.name).should.equal('products');
    });
  });
});
