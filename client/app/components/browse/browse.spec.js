import 'script!jquery/dist/jquery';
import angular from 'angular';
import {describe, expect, beforeEach, it} from '../../mocha-helper';
import {browse} from './browse';

describe('orders grid', () => {
  let $state;
  let $scope;
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<browse></browse>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(browse.name));

  beforeEach(angular.mock.inject( ($rootScope, $compile, _$state_, $httpBackend) => {
    let fakeOrderList = {
      'orders': [
        {'orderId': 1300070008},
        {'orderId': 1300070009}
      ]
    };

    $httpBackend.expectGET('http://localhost:3000/0').respond(200, fakeOrderList);

    $scope = $rootScope.$new();
    $state = _$state_;
    element = $compile(buildTemplate())($scope);
    $httpBackend.flush();
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /browse', () => {
      $state.go('browse');
      $scope.$apply();
      expect($state.current.url).to.equal('/browse');
    });

    it('a total', () => {
      $scope.$apply();
      expect($(element).find('h1').text()).to.contain('2');
    });
  });
});
