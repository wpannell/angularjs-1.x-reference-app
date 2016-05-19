import 'script!jquery/dist/jquery';
import angular from 'angular';
import {describe, expect, beforeEach, it} from '../../test-helper';
import {ordersContainer} from './orders-container';

describe('ordersContainer component', () => {
  let $state;
  let $scope;
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<orders-container></orders-container>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(ordersContainer.name));

  beforeEach(angular.mock.inject( ($rootScope, $compile, _$state_, $httpBackend) => {
    let fakeOrderList = {
      'orders': [
        {
          orderId: 1300070008,
          vehicleSpecification: {
            vehicleLine: {
              Description: 'MKZ',
              Code: 'CC9'
            },
            modelYear: {
              Description: '2016'
            },
            mpv: 'L2G FWD, 120A',
            features: {
              colorAndTrim: [{
                Description: 'Platinum Dune'
              }, {
                Description: 'Cappucino Leather'
              }]
            }
          }
        },
           {
          orderId: 1300070009,
          vehicleSpecification: {
            vehicleLine: {
              Description: 'MKZ',
              Code: 'CC9'
            },
            modelYear: {
              Description: '2016'
            },
            mpv: 'L2G FWD, 120A',
            features: {
              colorAndTrim: [{
                Description: 'Platinum Dune'
              }, {
                Description: 'Cappucino Leather'
              }]
            }
          }
        },

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
    it('a url called /orders', () => {
      $state.go('orders');
      $scope.$apply();
      expect($state.current.url).to.equal('/orders');
    });

    it('a total', () => {
      $scope.$apply();
      expect($(element).find('h1').text()).to.contain('2');
    });

    it('2 orders', () => {
      $scope.$apply();
      expect($(element).find('[rel=orderId]').length).to.equal(2);
    });
  });
});
