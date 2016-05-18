import 'script!jquery/dist/jquery';
import angular from 'angular';
import {describe, expect, beforeEach, it} from '../../../mocha-helper';
import {order} from './order';

describe('order component', () => {
  let $scope;
  let element;
  let $ = window.$;

  let fakeOrder = {
    orderId: 1
  };

  let buildTemplate = () => {
    return angular.element('<order order="order"></order>');
  };

  beforeEach(window.module(order.name));

  beforeEach(angular.mock.inject( ($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
    $scope.order = fakeOrder;
    $scope.$apply();
  }));

  it('is an element', () => {
    expect(element).to.exist;
  });

  it('contains a value for order id', () => {
    expect($(element).find('[rel=orderId]').text()).to.contain('1');
  });

  it('contains a label for vehicle line', () => {
    expect($(element).find('[rel=vlLabel]').text()).to.contain('Vehicle Line:');
  });
});
