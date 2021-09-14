import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let result = '';
  let arr  = [];
  if(!Array.isArray(members)) {
    return false;
  }
    for(let i = 0; i < members.length; i++) {
      if(typeof(members[i]) == 'string' && members[i] != '' && isNaN(members[i]) ) {
        arr.push(members[i].trim().toLocaleUpperCase()[0]);
      }
    }
  if(arr.length == 0) {
    return false
  }
  else {
    arr.sort();
    for(let elem of arr) {
      result += elem;
    }
    return result;
  }
}


console.log(createDreamTeam([ ['David Abram'],
['Robin Attfield'],
'Thomas Berry',
['Paul R.Ehrlich'],
'donna Haraway',
' BrIaN_gOodWiN  ',
{
  0: 'Serenella Iovino'
},
'Erazim Kohak',
'  val_plumwood']));