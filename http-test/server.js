//http module used to create http server latter
var http=require("http");
//url parse module used by
var url=require("url");

//start a new http server running on node
http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  console.log(url.parse(request.url).pathname);
  response.end();
  //1000ms later after response it, the thread will log sth
  setTimeout(function(){console.log("time out after response");},1000);
}).listen(8888);

//since node has started the server
//now we can output some hints to the node console
console.log("server started");
