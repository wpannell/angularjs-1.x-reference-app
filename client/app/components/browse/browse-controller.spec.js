import {describe, expect, beforeEach, afterEach, it} from '../../mocha-helper';

import {BrowseController} from './browse-controller';

describe('browse controller', () => {
  let controller;
  let mockService;

  beforeEach( () => {
    mockService = {};
    controller = new BrowseController(mockService);
  });

  it('initializes the total', () => {
    expect(controller.total).to.equal(0);
  });

  it('initializes the error message', () => {
    expect(controller.errorMessage).to.equal('');
  });

  it('calls the service successfully', (done) => {
    mockService.fetch = (success) => {
      expect(success).to.equal(controller.updateTotal);
      done();
    };

    controller.fetch();
  });

  it('call the failing service', (done) => {
    mockService.fetch = (success, failure) => {
      expect(failure).to.equal(controller.updateErrorMessage);
      done();
    };

    controller.fetch();
  });

  it('updates the total', () => {
    let fakeCount = 2;
    controller.updateTotal(fakeCount);
    expect(controller.total).to.equal(2);
  });

  it('updates the error message', () => {
    let fakeErrorMessage = "fail";
    controller.updateErrorMessage(fakeErrorMessage);
    expect(controller.errorMessage).to.equal('fail');
  });
});
