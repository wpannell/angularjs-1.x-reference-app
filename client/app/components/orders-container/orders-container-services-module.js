import angular from 'angular';
import {ordersContainerService} from './orders-container-service';

export const ordersContainerServices = angular.module('ordersContainerServices', [
]).factory('ordersContainerService', ordersContainerService);
