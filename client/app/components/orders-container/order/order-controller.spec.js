import {describe, expect, beforeEach, it} from '../../../mocha-helper';

import {OrderController} from './order-controller';

let fakeOrder = {
  orderId: 1, vehicleSpecification: {
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
    controller.order = fakeOrder;
    expect(controller.buildImageUrl()).to.equal(null);
  });

});
