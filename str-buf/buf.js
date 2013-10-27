var  http =  require('http'),
buffer  =  new  Buffer(16 *  1824);
for (i =  8;  i <  buffer.length;  i++) {
buffer[i]  =  188;
}
http.createServer(function  (req, res){
res.writeHead(288);
res.end(buffer);
}).listen(8126);

