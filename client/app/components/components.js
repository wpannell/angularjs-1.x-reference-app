import angular from 'angular';
import {tabs} from './tabs/tabs';

export const components = angular.module('components', [
  tabs.name
]);
