import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {browseDirective} from './browse-directive';

import {browseServices} from './browse-services-module';

export const browse = angular.module('browse', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,
  browseServices
])

.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.
  when('/', '/browse').
  otherwise('/browse');

  $stateProvider.
  state('browse', {
    url: '/browse',
    template: '<browse></browse>'
  });
})
.directive('browse', browseDirective);
