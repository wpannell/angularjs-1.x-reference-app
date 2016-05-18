// import './order.styl';
import template from './order.html';

export const orderDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
