const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexDog = email.lastIndexOf('@');
  let result = email.slice(indexDog + 1);
  return result;
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
