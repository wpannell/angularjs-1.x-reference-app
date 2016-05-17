import './orders-container.styl';
import template from './orders-container.html';
import {OrdersContainerController as controller} from './orders-container-controller';

export const ordersContainerDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'ordersVm'
  };
};
