import 'script!jquery/dist/jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {describe, expect, beforeEach, afterEach, it} from '../../mocha-helper';
import {browse} from './browse';

describe('orders grid', () => {
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<browse></browse>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(browse.name));

  beforeEach(angular.mock.inject( ($rootScope, $compile, _$state_) => {
    $scope = $rootScope.$new();
    $state = _$state_;
    $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /browse', () => {
      $state.go('browse');
      $scope.$apply();
      expect($state.current.url).to.equal('/browse');
    });
  });
});
