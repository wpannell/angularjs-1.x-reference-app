import './browse.styl';
import template from './browse.html';
import {BrowseController as controller} from './browse-controller';

export const browseDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'browseVm'
  };
};
