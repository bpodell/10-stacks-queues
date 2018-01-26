'use strict';

const Stack = require('../lib/stack');
require('jest');

describe('stack data structure module', function() {
  beforeEach(() => this.stack = new Stack());

  describe('default properties', () => {
    it('should create a new instance of a stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
  });
});