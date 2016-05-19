import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {ordersContainerDirective} from './orders-container-directive';

import {ordersContainerServices} from './orders-container-services-module';
import {order} from './order/order';

export const ordersContainer = angular.module('ordersContainer', [
    uiRouter,
    ngAnimate,
    ngAria,
    ngMaterial,
    ordersContainerServices.name,
    order.name
])

.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.
  when('/', '/orders').
  otherwise('/orders');

  $stateProvider.
  state('orders', {
    url: '/orders',
    template: '<orders-container></orders-container>'
  });
})
.directive('ordersContainer', ordersContainerDirective);
