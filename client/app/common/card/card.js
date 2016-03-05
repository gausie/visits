import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cardComponent from './card.component';

let cardModule = angular.module('card', [
  uiRouter
])

.component('card', cardComponent);

export default cardModule;
