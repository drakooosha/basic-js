import { NotImplementedError } from '../extensions/index.js';

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
 export default function repeater(str,options) {
  let  {repeatTimes,separator,addition,additionRepeatTimes,additionSeparator} = options;
  let result = '';
  str = String(str);
  separator = separator === undefined ? '+' : separator;
  addition = addition === undefined ? '' : String(addition); 
  additionSeparator = additionSeparator === undefined ? '|' : additionSeparator;
  repeatTimes = repeatTimes === undefined ? 1 : repeatTimes;
  additionRepeatTimes = additionRepeatTimes === undefined ? 1 : additionRepeatTimes;
  for(let i = 1; i <=repeatTimes; i++) {
    result+=str;
    for(let j = 1; j <= additionRepeatTimes; j++) {
      result += j!=additionRepeatTimes ? addition+additionSeparator : addition;
    }
    if(i != repeatTimes) {
      result+=separator
    }
  }

  return str === ''? str : result
}