//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers){
// Write your code here
var numbers=numbers.split(" ");
 var smallest = numbers[0];
    var largest = numbers[0];
               
for(var i=1; i< numbers.length; i++) {
 if(numbers[i] > largest)
    largest = numbers[i];
 else if (numbers[i] < smallest)
    smallest = numbers[i];
 }
    return largest+" "+smallest;
}
module.exports = highestAndLowest;
