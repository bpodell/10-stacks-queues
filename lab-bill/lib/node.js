'use strict';

module.exports = class {
  constructor(val) {
    if(!val) return new Error('value must be passed as an argument');
    this.val = val;
    this.next = null;
  }
};