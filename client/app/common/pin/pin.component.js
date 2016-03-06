import template from './pin.html';
import controller from './pin.controller';
import './pin.styl';

export default {
  restrict: 'E',
  bindings: {
    data: '='
  },
  template,
  controller,
  controllerAs: 'vm',
};
