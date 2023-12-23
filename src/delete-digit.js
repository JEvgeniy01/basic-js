const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  // remove line with error and write your code here
  let nToStr = String(n);
  let array = nToStr.split("");
  let resultArray = [];
  array.forEach((item, index, array) => {
    //Создаем временный массив - удаляем поочередно каждый элемент строки
    let tempArray = [...array].slice(0, index).concat([...array].slice(index+1));
    //Суммарная строка оставшихся элементов
    let sum = tempArray.reduce((sum, current) => sum + current);
    resultArray.push(sum);
  });
  // Находим макс значение из массива элементов (без 1 числа)
  let max = Math.max(...resultArray);
  console.log(max);
  return max;
}

module.exports = {
  deleteDigit,
};
