const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  let field = [];

  for (let i = 0; i < rowCount; i++) {
    field[i] = [];
    for (let j = 0; j < colCount; j++) {
      field[i][j] = 0;
      if (matrix[i][j] === true) {                
        field[i][j] = 1;
      } else {
        if (i - 1 >= 0) {
          if (j - 1 >= 0 && matrix[i - 1][j - 1] === true) field[i][j]++; //1
          if (matrix[i - 1][j] === true) field[i][j]++; //2
          if (j + 1 < colCount && matrix[i - 1][j + 1] === true) field[i][j]++; //3
        }        

        if (j - 1 >= 0 && matrix[i][j - 1] === true) field[i][j]++; //4
        if (j + 1 < colCount && matrix[i][j + 1] === true) field[i][j]++; //6

        if (i + 1 < rowCount) {
          if (j - 1 >= 0 && matrix[i + 1][j - 1] === true) field[i][j]++; //7
          if (matrix[i + 1][j] && matrix[i + 1][j] === true) field[i][j]++; //8
          if (j + 1 < colCount && matrix[i + 1][j + 1] === true) field[i][j]++; //9
        }
      }
    }
  }

  return field;
}

module.exports = {
  minesweeper
};
