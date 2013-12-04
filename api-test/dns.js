var dns=require("dns");
dns.resolve("www.sap.corp",function(err,addresses){
  console.log(addresses);
});
