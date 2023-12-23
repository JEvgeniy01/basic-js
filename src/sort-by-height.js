const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Создаем пустой результирующий массив
  let result = [];
  // Получаем фильтрованный массив без - 1
  let filtered = arr.filter((item) => item !== -1);
  // Сортируем массив на месте без -1
  filtered.sort((a, b) => {
    return a - b;
  });
  // Парсим исходный массив (если элемент = -1 - записываем его в результирующий, если не равен -1 - выцепляем последовательно из сортированного и фильтрованного массива индексы по порядку)
  let sortedIndexCount = 0;
  for (let i = 0; i < arr.length; i++) {
    // счетчик индекса для сортированного массива
   
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      result.push(filtered[sortedIndexCount]);
      sortedIndexCount += 1;
    }
    
  }
  
  return result;
}
module.exports = {
  sortByHeight,
};
