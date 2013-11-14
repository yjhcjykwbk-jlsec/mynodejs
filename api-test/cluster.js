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
  console.error("[timeout]3 seconds after "+ process.pid+" has started ...");
  //if current process is not master, then kill it
  //process will first disconnect from cluster, then exit
  if(cluster.isWorker) process.exit(0);
}
var timeouts = [];
timeouts[process.pid]=setTimeout(timeout, 3000);
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
    res.end("hello world\n");
    setTimeout(successMsg,1000);
  }).listen(8888);
}
