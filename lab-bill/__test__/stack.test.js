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
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });
  describe('PUSH', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e,i) => this.stack.push(~~(Math.random() * i)));
      expect(this.stack.size).toEqual(20);
    });
    it('should add a new node with the val of 1 to the top of the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('POP', () => {
    it('should remove the top most node from the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.val).toEqual(1);
      expect(this.stack.pop().val).toEqual(1);
    });
    it('should throw an error if there is nothing to pop', () => {
      expect(() => {
        this.stack.pop();
      }).toThrow();
    });
    it('should decrease the size of the stack', () => {
      this.stack.push(1);
      this.stack.push(2);
      this.stack.push(3);
      this.stack.push(4);
      this.stack.pop();
      expect(this.stack.size).toEqual(3);
    });
  });
  describe('PEEK', () => {
    it('should return the top of the stack', ()=> {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
    it('should throw an error if there is nothing to see', () => {
      expect(() => this.stack.peek()).toThrow();
    });
    it('should return the top of the stack even after something has been removed', ()=> {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      this.stack.push(2);
      this.stack.push(3);
      this.stack.pop();
      expect(this.stack.peek().val).toEqual(2);
    });
  });
});