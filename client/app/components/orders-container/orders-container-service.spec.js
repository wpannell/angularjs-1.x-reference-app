import angular from 'angular';
import {describe, expect, beforeEach, afterEach, it} from '../../mocha-helper';
import {ordersContainerServices} from './orders-container-services-module';

describe('ordersContainer service', () => {
  let $httpBackend;
  let service;

  beforeEach(angular.mock.module(ordersContainerServices.name));
  beforeEach(angular.mock.inject((_$httpBackend_, ordersContainerService) => {
    $httpBackend = _$httpBackend_;
    service = ordersContainerService;
  }));

  afterEach( () => {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('register success handler', (done) => {
    $httpBackend.expectGET('http://localhost:3000/0').respond(200, 'asdf');
    let success = (data, status) => {
      expect(status).to.equal(200);
      expect(data).to.equal('asdf');
      done();
    };

    service.fetch(success, () => {});
    $httpBackend.flush();
  });

  it('register failure handler', (done) => {
    $httpBackend.expectGET('http://localhost:3000/0').respond(500, 'Server.Unspecified');
    let failure = (data, status) => {
      expect(status).to.equal(500);
      expect(data).to.equal('Server.Unspecified');
      done();
    };

    service.fetch(() => {}, failure);
    $httpBackend.flush();
  });
});
