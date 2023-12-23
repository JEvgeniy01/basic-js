const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // remove line with error and write your code here
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  
  if (Object.getOwnPropertyNames(date).includes('toString')) {
    throw new Error("Invalid date!");
  }
  const obj = {
    12: "winter",
    1: "winter",
    2: "winter",
    3: "spring",
    4: "spring",
    5: "spring",
    6: "summer",
    7: "summer",
    8: "summer",
    9: "autumn",
    10: "autumn",
    11: "autumn",
  };
  let month = date.getMonth() + 1;
  let season;
  for (let [key, value] of Object.entries(obj)) {
    if (key.includes(String(month))) {
      season = value;
    }
  }
  return season;
}

module.exports = {
  getSeason,
};
