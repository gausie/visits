import template from './content.html';
import controller from './content.controller';
import './content.styl';

export default {
  restrict: 'E',
  bindings: {
    id: '<',
    type: '<',
    date: '<',
    content: '<',
  },
  template,
  controller,
  controllerAs: 'vm',
};
