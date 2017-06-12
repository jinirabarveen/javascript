// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

var myObj =[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];

//Write your code here
// Uncomment the below statement - when code is written

//a
var Programmer=new Array();
for(var i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Programmer"){
        //Programmer.push({"name":myObj[i].name,"age":myObj[i].age,"occupation":myObj[i].occupation});
        
    }
}
Programmer.push("Developer");
        Programmer.push("Programmer");
console.log(Programmer);

//b
var x=myObj.sort(function(a, b){
    return b.age-a.age;
});
console.log(x);
//c
var developer=new Array();
var program=new Array();
for(var i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Developer"){
        developer.push({"name":myObj[i].name,"age":myObj[i].age});
    }
    else{
         program.push({"name":myObj[i].name,"age":myObj[i].age});
    }
}
console.log(developer);
console.log(program);
var newObj;
newObj={"Developer":developer,"Programmer":program};
console.log(newObj);
var names=new Array();
myObj.map(function(key){
    names.push(key.name);
});
console.log(names);
module.exports = {
  c: Programmer,
  d: newObj,
  e: names
};
