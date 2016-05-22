import './orders-container.styl';
import template from './orders-container.html';
import {OrdersContainerController as controller} from './orders-container-controller';

export const ordersContainerComponent = {
  template,
  controller,
  controllerAs: 'ordersVm'
};
