//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];

function flatten(arrArg) {
  //Write your code here
 var merged = [].concat.apply([], arr);
 var x=[].concat.apply([],merged);
 return x;
 }
 
const newArr = flatten(arr);

module.exports = newArr;
