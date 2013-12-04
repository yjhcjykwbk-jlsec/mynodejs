var circle = require('../mod-test/circle.js');
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));
xx="where is my scope";
var tmp=1;
var tmp2="hello";

console.log("global variables in this file or say module:");
for(s in global){
  console.log(s);
}

//console.log(xx);
//console.log(yy);
