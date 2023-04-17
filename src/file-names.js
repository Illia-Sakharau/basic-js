const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names = []) {
  res = [];

  names.forEach((elem, ind, arr) => {
    let num = 0;
    for (let i = 0; i < ind; i++) {
      if (arr[i] === elem) {
        num++
      }
    }

    if (num === 0 && !res.includes(elem)) {
      res.push(elem);
    } else if (num === 0) {
      res.push(`${elem}(${num + 1})`)
    } else {
      res.push(`${elem}(${num})`)
    }
  })

  return res;
}

module.exports = {
  renameFiles
};
