import template from './card.html';
import controller from './card.controller';
import './card.styl';

let cardComponent = {
  restrict: 'E',
  bindings: {
  	name: '=',
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default cardComponent;