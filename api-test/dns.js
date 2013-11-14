var dns=require("dns");
dns.resolve("www.youtube.com",function(err,addresses){
  console.log(addresses);
});
