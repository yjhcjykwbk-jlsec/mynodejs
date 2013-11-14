<script src="http://cdn.socket.io/stable/socket.io.js"></script>

//此时，Socket.IO在此页面上是有效的，是时候创建Socket了：

// 创建Socket.IO实例，建立连接
var socket= new io.Socket('localhost',{ 
  port: 8080 
}); 
socket.connect(); 

// 添加一个连接监听器
socket.on('connect',function() { 
  console.log('Client has connected to the server!'); 
});

// 添加一个连接监听器
socket.on('message',function(data) { 
  console.log('Received a message from the server!',data); 
});

// 添加一个关闭连接的监听器
socket.on('disconnect',function() { 
  console.log('The client has disconnected!'); 
}); 

// 通过Socket发送一条消息到服务器
function sendMessageToServer(message) { 
  socket.send(message); 
}

