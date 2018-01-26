'use strict';

const Queue = require('../lib/queue');

describe('queue data structure module', function() {
  beforeEach(() => this.queue = new Queue());
  
  describe('default properties', () => {
    it('should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });
  describe('ENQUEUE', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e,i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(20);
    });
    it('should add a new node with the val of 1 to the front of the queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(1);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('DEQUEUE', () => {
    it('should remove the last node from the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.front.val).toEqual(1);
      expect(this.queue.dequeue().val).toEqual(2);
    });
    it('should throw an error if there is nothing to pop', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
    it('should decrease the size of the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      this.queue.enqueue(4);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(3);
    });
  });
});