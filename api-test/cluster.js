//in this file it demonstrate a cluster containing four working processes which all listen to port 8888
//everytime a process get a request, it handles it and then exit
//then we give four http requests and everytime there's a different processes that handle with it
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

//after process 'worker' is forked
cluster.on('fork', function(worker) {
  worker.send("msg from master process "+process.pid);
});
//after process 'worker' is online
cluster.on('online', function(worker) {
  console.log("[online]worker "+worker.process.pid+" has become online");
});
//after process 'worker' is disconnected
cluster.on('disconnect', function(worker) {
  console.log('[disconnect]The worker ' + worker.process.pid + ' has disconnected');
  //since the worker process is disconnected, clear its timeout
  clearTimeout(timeouts[worker.process.pid]);
});
//after process 'worker' is died
cluster.on('exit', function(worker, code, signal) {
  console.log('[died]worker ' + worker.process.pid + ' has died');
});
//after current process recved a msg
process.on('message',function(msg){
  console.log("[message]I am worker "+process.pid+" received msg:"+msg);
});
//after current process has started for 3 seconds
function timeout() {
  console.error("[timeout]30 seconds after "+ process.pid+" has started ...");
  //if current process is not master, then kill it
  //process will first disconnect from cluster, then exit
  if(cluster.isWorker) process.exit(0);
}
function successMsg(){
  console.log("[success]:I am worker "+process.pid+" and i have handled a request");
  process.exit();
}
var timeouts = [];
timeouts[process.pid]=setTimeout(timeout, 30000);
if(cluster.isMaster) {
  // Fork worker processes.
  for (var i = 0; i < numCPUs; i++) 
    cluster.fork();
} 
else {
  console.log("i am a new worker thread:"+process.pid);
  //Here workers all share the same TCP/HTTP connection
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world, i am worker thread "+process.pid+"\n");
    setTimeout(successMsg,1000);
  }).listen(8888);
}
