//Q12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter){
//Write your code here
var count=0;
for(var i=0; i<str.length;i+=1){
    if(str[i]===letter){
        count+=1;
    }
}
return count;
}


module.exports = char_count;
