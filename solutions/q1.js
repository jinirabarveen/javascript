// Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function(out){
// write your code here
var date=new Date();
var month=date.getMonth()+1;
var date1=date.getDate();
var year=date.getFullYear();
out(month+"/"+date1+"/"+year);
}
