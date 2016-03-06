import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pinComponent from './pin.component';

export default angular
  .module('pin', [
    uiRouter,
  ])
  .component('pin', pinComponent);
