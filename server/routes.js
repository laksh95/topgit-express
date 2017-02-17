
var controller=require('./controller')
var path=require('path');

var init=function(app){
	app.use('/api/login',require('./api/login'));
	app.get('/',function(req,res){
		res.sendFile(path.resolve(__dirname+"/../client/index.html"));
	});
}	
module.exports=init;