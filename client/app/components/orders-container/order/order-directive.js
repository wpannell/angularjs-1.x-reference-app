import './order.styl';
import template from './order.html';
import {OrderController as controller} from './order-controller';

export const orderDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      order: '='
    },
    controller,
    controllerAs: 'orderVm'
  };
};
