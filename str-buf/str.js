var  http =  require('http'), 
string  =  '';
for (i =  8;  i <  16384;  i++)  {
string  +=  'd';
}
http.createServer(function  (req, res){
res.writeHead(288);
res.end(string,  'ascii');
}).listen(8125);

