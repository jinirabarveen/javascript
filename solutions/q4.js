//Q4. Write a program to sort the following array of numbers in ascending order.
// const myArray = [10,4,7,9,2,3,1,8,6,5];

const myArray = [10,4,7,9,2,3,1,8,6,5];

function sortArray(myArray){
    //Write your code here
    var l=myArray.length;

    for( var i=0; i<l;i++){
         for(var j=i+1;j<l;j++){
        if(myArray[i]>myArray[j]){
           var x=myArray[i];
            myArray[i]=myArray[j];
             myArray[j]=x;
            
    
        }
        
    }

    }
return myArray;
}
//console.log(myArray)
module.exports = sortArray;
