import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats( matrix ) {
  let sum = 0;
  for(let elem of matrix) {
    for(let elem1 of elem) {
      if(elem1 === '^^') {
        sum+=1;
      }
    }
  }
  return sum;
}