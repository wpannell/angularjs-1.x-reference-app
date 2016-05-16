import angular from 'angular';
import {describe, expect, beforeEach, afterEach, it} from '../../mocha-helper';
import {browseServices} from './browse-services-module';

describe('browse service', () => {
  let $httpBackend;
  let service;

  beforeEach(angular.mock.module(browseServices.name));
  beforeEach(angular.mock.inject((_$httpBackend_, browseService) => {
    $httpBackend = _$httpBackend_;
    service = browseService;
  }));

  it('register success handler', (done) => {
    $httpBackend.expectGET('http://localhost:3000/0').respond(200, 'asdf');
    let success = (data, status) => {
      expect(status).to.equal(200);
      expect(data).to.equal('asdf');
      done();
    };

    service.get(success, () => {});
    $httpBackend.flush();
  });

  it('register failure handler', (done) => {
    $httpBackend.expectGET('http://localhost:3000/0').respond(500, 'Server.Unspecified');
    let failure = (data, status) => {
      expect(status).to.equal(500);
      expect(data).to.equal('Server.Unspecified');
      done();
    };

    service.get(() => {}, failure);
    $httpBackend.flush();


  });
});
