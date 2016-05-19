// import './order.styl';
import template from './order.html';
import {OrderController as controller} from './order-controller';
import {orderLink} from './order-link';

export const orderDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      order: '='
    },
    controller,
    controllerAs: 'orderVm',
    link: orderLink
  };
};
