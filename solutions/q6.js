// 6. Write a function to find the difference of two arrays?

function difference(arr1,arr2) {
// Write your code here
 var newArr = [];
   
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      
      newArr.push(arr1[i]);
    }
  }
  
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
          
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}
module.exports = difference;
