import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page-footerComponent from './page-footer.component';

export default angular
  .module('page-footer', [
    uiRouter,
  ])
  .component('page-footer', page-footerComponent);
