//http module used to create http server latter
var http=require("http");
//url parse module used by
var url=require("url");
//querystring module used by..
var querystring=require("querystring");

//start a new http server running on node
http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  console.log(url.parse(request.url).pathname);
  response.end();
}).listen(8888);

//since node has started the server
//now we can output some hints to the node console
console.log("server started");
