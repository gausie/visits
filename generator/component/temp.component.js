import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};
