import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 export default class DepthCalculator {
  calculateDepth(arr,count = 1) {
    if(arr.every(elem => {return !Array.isArray(elem)})) {
      return 1;
    }
    else {
      if(arr.flat(count).every(elem => {return !Array.isArray(elem)})) {
        return count+1;
      }
      else {
        return this.calculateDepth(arr,count+=1);
      }
    }
  }
}
