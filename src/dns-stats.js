const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  for (let domain of domains) {
    let domainItemArr = domain.split("");
    for (let i = domainItemArr.length - 1; i > 0; i--) {
      if (domainItemArr[i] === ".") {
        let uniqueDomain = domainItemArr
          .slice(domainItemArr.findIndex((cur) => cur === domainItemArr[i]))
          .join("");
        if (!Object.keys(obj).includes(uniqueDomain)) {
          obj[uniqueDomain] = 1;
        }
        let lastDomain = domainItemArr.join("");
        if (!Object.keys(obj).includes(lastDomain)) {
          obj[lastDomain] = 1;
        }
      }
    }
  }
  // Счетчик для объекта
  for (let [key, value] of Object.entries(obj)) {
    for (let domain of domains) {
      if (domain.includes(`${key}`)) {
        obj[key] += 1;
      }
    }
  }
  console.log(obj);
  return obj;
}

module.exports = {
  getDNSStats,
};
