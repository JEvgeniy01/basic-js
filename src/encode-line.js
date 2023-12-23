const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let indexArray = [];
  let result = [];
  let arr = str.split("");
  // Создаем массив индексов на которых буквы сменяются
  arr.forEach((item, index, array) => {
    if (item !== array[index + 1]) {
      // В массив индексов записывается индекс конечного одинакового символ
      indexArray.push(index);
    }
  });
  let tempChangeIndex = 0;
  // Для каждого индекса - обрезаем соответствующую часть исходного массива с одинаковыми символами и вычисялем его длину
  indexArray.forEach((item, index, array) => {
    let partArr = arr.slice(tempChangeIndex, item + 1);
    let partLength = partArr.length;
    if (partArr.length !== 1) {
      let resultPartStr = String(partLength) + partArr[0];
      result.push(resultPartStr);
    } else {
      let resultPartStr = partArr[0];
      result.push(resultPartStr);
    }
    tempChangeIndex = item + 1;
  });
  console.log(result.join(""));
  return result.join("");
}

// remove line with error and write your code here

module.exports = {
  encodeLine,
};
