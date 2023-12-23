const { NotImplementedError } = require("../extensions/index.js");

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
function countCats(matrix) {
  // remove line with error and write your code here
  const cat = "^^";
  let count = 0;
  for (let row = 0; row < matrix.length; row += 1) {
    let col = matrix[row];
    for (let colItem = 0; colItem < col.length; colItem += 1) {
      if (col[colItem] === cat) {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
