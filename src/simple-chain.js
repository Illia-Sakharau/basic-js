const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value = '(  )') {
    this.chainArr.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {

    if (Number.isInteger(position) && position <= this.chainArr.length && position > 0) {
      this.chainArr.splice(position - 1, 1);
    } else {  
      this.chainArr = [];      
      throw new Error('You can\'t remove incorrect link!');
    }
    return chainMaker;
    
  },
  reverseChain() {
    this.chainArr.reverse();
    return chainMaker;
  },
  finishChain() {
    let res = this.chainArr.join('~~');
    this.chainArr = [];    
    return res;
  }
};

module.exports = {
  chainMaker
};
