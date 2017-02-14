//setup server
var address=require('./config')
var express=require('express');
var app=express();
require("./config/express")(app);
require("./routes")(app);
//start server
app.listen(address.port,function(){
	console.log("server running on localhost:"+address.port);
});