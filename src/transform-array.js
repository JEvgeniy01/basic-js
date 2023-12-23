const { NotImplementedError } = require("../extensions/index.js");

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
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // // 0. Check for Array instance
  // if (!(arr instanceof Array)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }
  // //Список последовательностей
  // const funcNameList = [
  //   '--discard-prev',
  //   '--double-prev',
  //   '--double-next',
  //   '--discard-next',
  // ];
  // const funcList = [discardPrev];
  // //1. Проверка на отсутствие последовательностей
  // let existingSequences = arr.some((item) => {
  //   for (let func of funcNameList) {
  //     return item === func;
  //   }
  // });
  // if (!existingSequences) {
  //   return arr;
  // }
  // //Основной функционал
  // //2. Найти вид последовательности
  // let resultArr = [...arr];
  // resultArr.map((resultItem, resultIndex, resultArray) => {
  //   console.log(resultArray)
  //   //Находим элемент в списке функций
  //   let searchedFuncIndex = funcNameList.findIndex(
  //     (funcName, funcNameIndex) => {
  //       return funcName === resultItem;
  //     }
  //   );
  //   // 2. Элемент исходного массива не является последовательностью - вернуть элемент
  //   if (searchedFuncIndex === -1) {
  //     return resultItem;
  //   } else {
  //     // 3. Найти соответствующую функцию в массиве функций
  //     let calledSequence = funcList.find((funcListItem, funcListIndex) => {
  //       return funcListIndex === searchedFuncIndex;
  //     });
  //     // 4. Вызвать соответствующую функцию
  //     calledSequence(resultItem, resultIndex, resultArray);
  //   }
  // });

  // //Последовательности
  // function discardPrev(item, index, array) {

  //   //Проверка на существование предыдущего элемента, на наличие предыдущего и последуюгео элемента - чисел
  //   if (index !== 0) {
  //     if (typeof array[index - 1] === 'number') {
  //       return array.splice(index - 1, 2);
  //     }
  //     return array.splice(index, 1);
  //   } else {
  //     return array.splice(index, 1);
  //   }
  // }
  // console.log(resultArr);
  // return resultArr;
}

module.exports = {
  transform,
};
