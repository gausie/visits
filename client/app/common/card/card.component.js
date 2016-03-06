import template from './card.html';
import controller from './card.controller';
import './card.styl';

let cardComponent = {
  restrict: 'E',
  bindings: {
  	name: '=',
  	data: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default cardComponent;