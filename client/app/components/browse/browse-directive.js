import './browse.styl';
import template from './browse.html';

export const browseDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
