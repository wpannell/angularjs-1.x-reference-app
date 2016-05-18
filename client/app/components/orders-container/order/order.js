import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {orderDirective} from './order-directive';

export const order = angular.module('order', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.directive('order', orderDirective);
