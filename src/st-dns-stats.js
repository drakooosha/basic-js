import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
  let obj = {};
  for(let elem of domains) {
    let item = elem.split('.').reverse();
    let prev = '';
    for(let elem1 of item ) {
      prev+=`.${elem1}`;
      let count = 0;
      for(let elem2 of domains) {
        if(`.${elem2.split('.').reverse().join('.')}`.indexOf(prev) != -1) {
          count++;
        }
      }
      if(Object.keys(obj).indexOf(prev) == -1) {
        obj[prev] = count;
      }
    }
  }
  return obj;
}
