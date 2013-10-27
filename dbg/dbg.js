x = 5;
setTimeout(function () {
    ++x;
    debugger;
    function a() {
    x *= 3;
    debugger;
    }
    a();
    console.log("done");
    }, 1000);
debugger;
console.log("begin");

