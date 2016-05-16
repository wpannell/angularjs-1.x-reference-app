
import angular from 'angular';
import {browseService} from './browse-service';

export const browseServices = angular.module('browseServices', [

]).factory('browseService', browseService);
