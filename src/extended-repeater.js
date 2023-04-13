const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const mainStr = "" + str;  
  let mainCounter = options.repeatTimes || 0;
  const mainSeparator = options.separator || "+";

  const additionStr = "" + options.addition;  
  let additionCounter = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";


  let res = [];


  for (let i = 0; i < mainCounter; i++){
    res.push(mainStr);

    for (let j = 0; j < additionCounter; j++) {
      res.push(additionStr);
      if (j !== additionCounter - 1) {
        res.push(additionSeparator);
      }
    }

    if (i !== mainCounter - 1) {
      res.push(mainSeparator);
    }

  };

  if (res.length === 0 && mainStr) {
    res.push(mainStr);
    if (additionStr) {
      res.push(additionStr);
    }
  }
  

  res = res.filter(el => el != 'undefined');


  return res.join('');




  // let res = "";

  // console.log(mainStr + mainSeparator + mainStr)

  // console.log(mainSeparator)

  // for (let i = 0; i < mainCounter; i++){
  //   res = res + mainStr;

  //   for (let j = 0; j < additionCounter; j++) {
  //     res = res + additionStr;
  //     if (j !== additionCounter - 1) {
  //       res = res + additionSeparator;
  //     }
  //   }

  //   if (i !== mainCounter - 1) {
  //     res = res + mainSeparator;
  //   }

  // };

  // if (res === "" && mainStr) {
  //   res += mainStr;
  //   if (additionStr) {
  //     res += additionStr;
  //   }
  // }


  // console.log(res);
  // return res;
}

module.exports = {
  repeater
};
