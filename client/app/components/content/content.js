import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentComponent from './content.component';

export default angular.module('content', [
  uiRouter,
])

.component('content', contentComponent);
