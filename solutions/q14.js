//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

//Write your code here
for(var i=0;i<5;i++) {
var output="";
    for(var j=0;j<5-i;j++) {
        output+=" ";
       
    }
    for(var k=0;k<=i;k++) {
       
       output += "* ";
    }
    // output += "";
    console.log(output);  
}


