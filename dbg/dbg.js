var x = 5;
var http=require("http");
setTimeout(function () {
  ++x;
  debugger;
  function a() {
    x *= 3;
    debugger;
  }
  a();
  console.log(x);
  console.log("done");
}, 1000);
debugger;
console.log("begin");

