
var controller=require('./controller')
var path=require('path');

var init=function(app){
  console.log("gffgg");
	app.use('/api/userInfo',require('./api/users'));
	app.get('/',function(req,res){
		res.sendFile(path.resolve(__dirname+"/../client/index.html"));
	});
}	
module.exports=init;