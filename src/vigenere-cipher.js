const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(type = true) {
    this.isDirect = type;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const delta = 65;
    let res = [];
    let spaceIndex = [];

    let index = 1;
    while (message.indexOf(' ', index) > -1) {
      index = message.indexOf(' ', index) + 1;
      spaceIndex.push(index - 1);
    }

    message = message.replace(/\s+/g, '');
    

    while (key.length < message.length) {
      key += key;
    }

    for (let i = 0; i < message.length; i++) {

      if (message.codePointAt(i) >= 65 && message.codePointAt(i) <= 90) {

        let codePoint = message.codePointAt(i) + key.codePointAt(i) - delta;
        if (codePoint <= 90) {
          res.push(String.fromCharCode(codePoint));
        } else {
          res.push(String.fromCharCode(codePoint - 26));
        }        

      } else {
        res.push(message[i]);
      }

    }

    spaceIndex.forEach(elem => res.splice(elem, 0, " "));

    if (this.isDirect) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
    
  }

  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const delta = 65;
    let res = [];
    let spaceIndex = [];

    let index = 1;
    while (encryptedMessage.indexOf(' ', index) > -1) {
      index = encryptedMessage.indexOf(' ', index) + 1;
      spaceIndex.push(index - 1);
    }

    encryptedMessage = encryptedMessage.replace(/\s+/g, '');
    

    while (key.length < encryptedMessage.length) {
      key += key;
    }

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (encryptedMessage.codePointAt(i) >= 65 && encryptedMessage.codePointAt(i) <= 90) {

        let codePoint = encryptedMessage.codePointAt(i) - key.codePointAt(i) + delta;
        if (codePoint >= 65) {
          res.push(String.fromCharCode(codePoint));
        } else {
          res.push(String.fromCharCode(codePoint + 26));
        }        

      } else {
        res.push(encryptedMessage[i]);
      }

    }

    spaceIndex.forEach(elem => res.splice(elem, 0, " "));

    if (this.isDirect) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }


  }
}

module.exports = {
  VigenereCipheringMachine
};
