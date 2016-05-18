import {describe, expect, beforeEach, it} from '../../../mocha-helper';

import {OrderController} from './order-controller';

let fakeOrder = {
  orderId: 1,
  vehicleSpecification: {
    vehicleLine: {
      Description: 'MKZ', Code: 'CC9'
    }, modelYear: {
      Description: '2016'
    }, mpv: 'L2G FWD, 120A', features: {
      colorAndTrim: [{
        Description: 'Platinum Dune'
      }, {
        Description: 'Cappucino Leather'
      }]
    }
  }
};

describe('order controller', () => {
  let controller;

  beforeEach(() => {
    controller = new OrderController();
  });

  it('Returns a null image url', () => {
    controller.order = {
      vehicleSpecification: {
        vehicleLine: {Code: 'XXX'}
      }
    };
    expect(controller.buildImageUrl()).to.be.falsy;
  });

  it('Returns a real image url', () => {
    controller.order = {
      vehicleSpecification: {
        vehicleLine: {Code: 'CC9'}
      }
    };
    expect(controller.buildImageUrl()).to.equal('./artifacts/redMKZ.png');
  });

});
