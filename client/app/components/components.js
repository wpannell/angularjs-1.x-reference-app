import angular from 'angular';

import {ordersContainer} from './orders-container/orders-container';

export const components = angular.module('components', [
  ordersContainer.name
]);
