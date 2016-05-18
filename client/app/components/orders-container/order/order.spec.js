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
  }));

  it('order component is an element', () => {
    expect(element).to.not.equal(null);
    expect(element).to.not.equal(undefined);
  });

  it('should show a value for order id', () => {
    $scope.order = fakeOrder;
    $scope.$apply();
    expect($(element).find('[rel=orderId]').text()).to.contain('1');
  });
});
