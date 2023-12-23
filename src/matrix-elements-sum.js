const { NotImplementedError } = require("../extensions/index.js");

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
  //Кореектирующий коэффициент - нужен если количество строк не равно количеству стобцов
  // let diff = matrix.length - matrix[0].length;
  // let corrR = 0;
  // let corrC = 0;
  // if (diff > 0) {
  //   corrR = 0;
  //   corrC = diff;
  // }
  // if (diff < 0) {
  //   corrR = -diff;
  //   corrC = 0;
  // }
  let count = 0;
  let row = matrix.length;
  for (let i = 0; i < row; i++) {
    let col = matrix[i];
    for (let j = 0; j < col.length; j++) {
      //проходмся по столбцам - и увеличиваем счетчик, если встретили 0 выходим из столбца

      if (matrix[j][i] !== 0) {
        count += matrix[j][i];
      } else if (matrix[j][i] === 0) {
        count = count;
      }
      if (j + 1 > row) {
        let diff = matrix.length - matrix[0].length;
        if (matrix[j][i] !== 0) {
          count += matrix[j][i + diff];
        } else {
          count = count;
        }
      }
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum,
};
