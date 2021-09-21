import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  n = String(n);
  for(let i = 0; i < n.length; i++) {
    let number = Number(n.substring(0,i) + n.substring(i+1));
    if( number > max) {
      max = number;
    }
  }
  return max;
}
