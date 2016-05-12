import angular from 'angular';

import {browse} from './browse/browse';

export const components = angular.module('components', [
  browse.name
]);
