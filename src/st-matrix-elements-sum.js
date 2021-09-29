import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  for(let j = 0; j < matrix.length; j++){
      for(let i = 0; i< matrix.length ; i++) {
        if(matrix[i][j] == 0) {
          j++;
          if(j == matrix[0].length) {
            return sum;
          }
          i = -1;
        }
        else {
          sum += matrix[i][j];
        }
      }
    }
    return sum
}
