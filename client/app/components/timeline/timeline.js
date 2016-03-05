import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timelineComponent from './timeline.component';

let timelineModule = angular.module('timeline', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('timeline', {
      url: '/timeline',
      template: '<timeline></timeline>'
    });
})

.component('timeline', timelineComponent);

export default timelineModule;
