var http = require('http');
var equal = require('assert').equal;

var options = { 
    host: 'localhost', 
    port: 8888, 
    path: '/index.js', 
    method: 'GET', 
    headers:{ 
        'accept': '*/*', 
        'content-type': "application/atom+xml", 
        'accept-encoding': 'gzip, deflate', 
        'accept-language': 'en-US,en;q=0.9', 
        'user-agent': 'nodejs rest client'
    } 
}; 

var req = http.request(options, function (res) { 
    console.log('STATUS: ' + res.statusCode); 
    equal(200, res.statusCode); 
    console.log('HEADERS: ' + JSON.stringify(res.headers)); 
  
    res.on('data',function (chunk) { 
         console.log('BODY: ' + chunk); 
    }); 
}); 
  
req.on('error', function(e) { 
  console.log('problem with request: ' + e.message); 
}); 
  
req.end(); 
