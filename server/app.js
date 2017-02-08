var express=require('express')
var app=express();

require("./config/express")(app,express);
require("./routes")(app);
app.listen(3165,function(){
	console.log("server running on localhost:3165")
});
