import angular from 'angular';
import Home from './home/home';
import Timeline from './timeline/timeline';

let componentModule = angular.module('app.components', [
  Home.name,
  Timeline.name
]);

export default componentModule;
