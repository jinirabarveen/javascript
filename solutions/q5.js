//Q5. Write a function which takes array as argument and remove duplicates elements and returns a new array.
// INPUT
var arr=[1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

function removeDuplicates(arr){
  //Write your code here
  var len=arr.length;
  for(var i=0;i<len;i++){
      for(var j=i+1;j<len;j++){
          if(arr[i]==arr[j]){
              var shift=j;
               for(var k = j + 1; k < len; k++, shift++) {
                        arr[shift] = arr[k];
                    }
                    len--;
                    j--;
          }
      }
  }
 var m=new Array(len);
 for(var i=0;i<len;i++){
     m[i]=arr[i];
 }
return m;  
}
module.exports = removeDuplicates;
