import 'script!jquery/dist/jquery';
import angular from 'angular';

import chai from 'chai';
let expect = chai.expect;

import {home} from './home';

describe('Home page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<home></home>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(home.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a first section title', () => {
      expect($(element).find('.home-title1').text()).to.equal(
          'Cisco\’s Current Situation');
    });

    it('a second section title', () => {
      expect($(element).find('.home-title2').text()).to.equal('Portal Objectives');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        expect($(element).attr('layout-align')).to.equal('start');
      });
    });

    describe('a first section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Cisco performed an initial accounting policy assessment that');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'identified 32 key accounting policy impact areas');
        });
      });

      describe('a second bullet which contains ', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Cisco, along with E&Y, has completed evaluation of the 32 impact');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'areas from a business policy perspective');
        });
      });

      describe('and a third bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Cisco needs to now begin work to evaluate system impacts and make');
        });

        it('more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'required system changes to implement ASC 606, that would allow Cisco');
        });

        it('and yet more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'to be compliant with the new Standard by July-2018');
        });
      });
    });

    describe('and a second section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'Showcase Accenture’s proposed solution approach, assets and');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'capabilities');
        });
      });

      describe('a second bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'Exhibit Accenture’s insights into Cisco business');
        });
      });

      describe('a third bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'Placeholder for the mvp vision statement');
        });
      });
    });
  });
});
