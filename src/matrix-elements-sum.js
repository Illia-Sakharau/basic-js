const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let rowCount = matrix.length;
  matrix = matrix.flat();
  let colCount = matrix.length / rowCount;
  let summ = 0;

  matrix.forEach((value, index, arr) => {
    if (arr[index - colCount] !== 0) {
      summ += value;
    }
    
  })


  return summ;
  
}

module.exports = {
  getMatrixElementsSum
};
