/* eslint-env mocha */
/* global inject, expect */

import ContentModule from './content';
import ContentController from './content.controller';
import ContentComponent from './content.component';
import ContentTemplate from './content.html';

describe('Content', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ContentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ContentController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ContentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ContentComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContentTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContentController);
    });
  });
});
