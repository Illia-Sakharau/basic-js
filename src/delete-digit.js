const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = [];
  let i = 0;

  while (Math.floor(n / 10 ** i) !== 0) {
    if (i === 0){
      res.push(Math.floor(n / 10 ** (i + 1)));
    } else if (Math.floor(n / 10 ** (i)) === 0){
      res.push(n % 10 ** (i + 1));
    } else {
      res.push(Math.floor(n / 10 ** (i + 1)) * 10 ** i +  n % 10 ** i);
    }
    i++;
  }

  res.sort((a, b) => b - a);
  return res[0]
}

module.exports = {
  deleteDigit
};
