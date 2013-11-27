var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));
xx="where is my scope";
var tmp=1;
var tmp2="hello";

for(s in global){
  console.log(s);
}

//console.log(xx);
//console.log(yy);
