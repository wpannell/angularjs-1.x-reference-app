import 'script!jquery/dist/jquery';
import angular from 'angular';
import {describe, expect, beforeEach, it} from '../../../mocha-helper';
import {order} from './order';

describe('order component', () => {
  let $scope;
  let element;
  let $ = window.$;
  function findTextByRel(key) {
    return $(element).find('[rel=' + key + ']').text();
  }

  let fakeOrder = {
    orderId: 1,
    vehicleSpecification: {
      vehicleLine: {
        Description: 'MKZ'
      }
    }
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
    expect(findTextByRel('orderId')).to.contain('1');
  });

  it('contains a label for vehicle line', () => {
    expect(findTextByRel('vlLabel')).to.contain('Vehicle Line:');
  });

  it('contains a value for vehicle line', () => {
    expect(findTextByRel('vlValue')).to.contain('MKZ');
  });
});
