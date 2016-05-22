import 'angular-material/angular-material.css';
import '../styles/style.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {appComponent} from './app.component.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {components} from './components/components';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  components.name
])

.config(function($mdThemingProvider) {
  //noinspection JSUnresolvedFunction
  $mdThemingProvider.theme('default');
})

.component('app', appComponent);
