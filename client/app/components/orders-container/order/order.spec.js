import 'script!jquery/dist/jquery';
import angular from 'angular';
import {describe, expect, beforeEach, it} from '../../../test-helper';
import {order} from './order';

describe('order component', () => {
  let $scope;
  let element;
  let $ = window.$;

  let fakeOrder = {
    orderId: 1,
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
  };

  let buildTemplate = () => {
    return angular.element('<order order="order"></order>');
  };

  function findElementByRel(key) {
    return $(element).find('[rel=' + key + ']');
  }

  function findTextByRel(key) {
    return findElementByRel(key).text();
  }

  beforeEach(window.module(order.name));

  beforeEach(angular.mock.inject( ($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
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

  it('contains a label for model year', () => {
    expect(findTextByRel('myLabel')).to.contain('Model Year:');
  });

  it('contains a value for model year', () => {
    expect(findTextByRel('myValue')).to.contain('2016');
  });

  it('contains a label for model', () => {
    expect(findTextByRel('modelLabel')).to.contain('Model:');
  });

  it('contains a value for model', () => {
    expect(findTextByRel('modelValue')).to.contain('L2G FWD, 120A');
  });

  it('contains a label for paint', () => {
    expect(findTextByRel('paintLabel')).to.contain('Paint:');
  });

  it('contains a value for model', () => {
    expect(findTextByRel('paintValue')).to.contain('Platinum Dune');
  });

  it('contains a label for trim', () => {
    expect(findTextByRel('trimLabel')).to.contain('Trim:');
  });

  it('contains a value for trim', () => {
    expect(findTextByRel('trimValue')).to.contain('Cappucino Leather');
  });

  it('contains a placeholder image when no image is found', () => {
    $scope.order = { vehicleSpecification: {vehicleLine: {}}};
    $scope.$apply();
    expect($(element).find('img').attr('src')).to.equal('img/kitty.jpg');
  });

  it('contains a preview image when the order has an image URL', () => {
    $scope.order = { vehicleSpecification: {vehicleLine: {Code: 'CC9'}}};
    $scope.$apply();
    expect($(element).find('img').attr('src')).to.equal('img/redMKZ.png');
  });

  it('contains a view details button', () => {
    expect(findTextByRel('detailsButton')).to.contain('Preview');
  });
});
