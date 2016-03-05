import angular from 'angular';
import Home from './home/home';
import Timeline from './timeline/timeline';
import Details from './details/details';

let componentModule = angular.module('app.components', [
  Home.name,
  Timeline.name,
  Details.name
]);

export default componentModule;
