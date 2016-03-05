import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailsComponent from './details.component';

export default angular.module('details', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('details', {
      url: '/details',
      template: '<details-page></details-page>'
    });
})

.component('detailsPage', detailsComponent);
