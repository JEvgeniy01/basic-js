const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // remove line with error and write your code here
  let str = String(n);
  let array = str.split('');
  let sum = array.reduce((sum, current) => sum + Number(current), 0);
  let returnedStr = String(sum);
  if (returnedStr.length === 1) {
    return Number(returnedStr);
  }
  return getSumOfDigits(returnedStr);
}

module.exports = {
  getSumOfDigits
};
