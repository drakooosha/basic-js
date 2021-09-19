import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let newarr = arr.slice(0);

  for(let i = 0; i < newarr.length; i++) {
    if(newarr[i] === '--discard-next'){
      delete newarr[i];
      if(i+1 < newarr.length) {
        delete newarr[i+1];
      }
    }
    if(newarr[i] === '--double-prev') {
      delete newarr[i];
      if(i-1 >= 0 && newarr[i-1] != undefined) {
        newarr[i] = newarr[i-1]
      }
    }
    if(newarr[i] === '--discard-prev') {
      delete newarr[i];
      if(i-1 >= 0 && newarr[i-1] != undefined) {
        delete newarr[i-1];
      }
    }
    if(newarr[i] === '--double-next') {
      delete newarr[i];
      if(i+1 < newarr.length) {
        newarr[i] = newarr[i+1];
      }
    }
  }

  return newarr.filter(elem => elem != undefined);
}
