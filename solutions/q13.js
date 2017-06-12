//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done){
//Write your code here

var result=[];
var a=0;
var b=1;
 result.push(a,b);
var c;

    for(var i=0;i<numMax;i++){
        c=a+b;
        result.push(c);
        a=b;
        b=c;
        
    }
    return done(result);

}


module.exports = fibonacci;
