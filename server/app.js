var express=require('express')
var address=require('./config')
var app=express();
require("./config/express")(app);
require("./routes")(app);
app.listen(address.port,function(){
	console.log("server running on localhost:3165")
});