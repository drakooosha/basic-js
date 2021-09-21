import { NotImplementedError } from '../extensions/index.js';

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
 export default class VigenereCipheringMachine {
  constructor(type) {
    if(type === false) {
      this.type = false;
    }
    else {
      this.type = true;
    }
  }

  encrypt(str,str1) {
    if(str == undefined || str1 == undefined) {
      throw Error('Incorrect arguments!');
    }
    else {
      str = str.toUpperCase();
      str1 = str1.toUpperCase();
      while(str1.length < str.length) {
        str1 += str1;
      }
      let result = '';
      for(let i = 0; i < str.length; i++) {
        let codeStr = str[i].charCodeAt()  - 65;
        let codeStr1 = str1[0].charCodeAt() - 65;
        if(0 <= codeStr && codeStr <= 25) {
          result += String.fromCharCode(((codeStr+codeStr1) % 26)+65);
          str1 = str1.substring(1);
        }
        else {
          result += str[i];
        }
      }
      return this.type === false? result.split('').reverse().join('') : result;
    }
  }
  decrypt(str,str1) {
    if(str == undefined || str1 == undefined) {
      throw Error('Incorrect arguments!');
    }
    else {
      str = str.toUpperCase();
      str1 = str1.toUpperCase();
      while(str1.length < str.length) {
        str1 += str1;
      }
      let result = '';
      for(let i = 0; i < str.length; i++) {
        let codeStr = str[i].charCodeAt()  - 65;
        let codeStr1 = str1[0].charCodeAt() - 65;
        if(0 <= codeStr && codeStr <= 25) {
          result += String.fromCharCode(((26-(codeStr1 - codeStr)) % 26)+65);
          str1 = str1.substring(1);
        }
        else {
          result += str[i];
        }
      }
      return this.type === false? result.split('').reverse().join('') : result;
    }
  }
}
