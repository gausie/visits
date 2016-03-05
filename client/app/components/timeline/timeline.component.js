import template from './timeline.html';
import controller from './timeline.controller';
import './timeline.styl';

let timelineComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default timelineComponent;
