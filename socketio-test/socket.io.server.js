// 需要HTTP 模块来启动服务器和Socket.IO
var http= require('http'), io= require('socket.io'); 

// 在8080端口启动服务器
var server= http.createServer(function(req, res){ 
  // 发送HTML的headers和message
  res.writeHead(200,{ 'Content-Type': 'text/html' }); 
  res.end('<h1>Hello Socket Lover!</h1>'); 
}); 
server.listen(8888); 

// 创建一个Socket.IO实例，把它传递给服务器
var socket= io.listen(server); 
// 添加一个连接监听器
var i=0;
socket.on('connection', function(client){ 
  // 成功！现在开始监听接收到的消息
  client.on('message',function(msg){ 
    console.log('Received message from client:',msg); 
    client.send("[msg "+(i++)+"]hello, i am server!");
  }); 
  client.on('disconnect',function(){ 
    console.log('Server has disconnected'); 
  }); 
});

