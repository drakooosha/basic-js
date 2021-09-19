import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if(typeof(position) != 'number' || this.arr[position-1] == undefined) {
      this.arr = [];
      throw Error("You can't remove incorrect link!");
    }
    else {
      this.arr.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let arr1 = this.arr.splice(0);
    return arr1.join('~~');
  }
};