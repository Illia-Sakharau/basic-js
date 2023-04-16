const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = str.split('');
  let res = '';

  arr.push(123);
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++){
    
    if (arr[i] === arr[i + 1]){
      count++;      
    } else {
      if (count === 1){
        res += arr[i];
      } else {
        res += count + arr[i];
        count = 1;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
