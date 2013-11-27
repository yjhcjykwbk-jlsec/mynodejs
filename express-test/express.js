var http=require("http");
var express=require("express");
var app=express();

http.createServer(app).listen(9999,function(){console.log("app started");});
app.get("/haha",function(req,res){res.write("hello i am from express");res.end();});

console.log("helloworld");
console.log("helloworld");
console.log("helloworld");
console.log("helloworld");
console.log("helloworld");
console.log("helloworld");
