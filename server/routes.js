var controller=require('./controller')
var path=require('path');
var init=function(app){
	app.get('/',function(req,res){
		res.sendFile(path.resolve(__dirname+"/../client/index.html"));
	});
	app.get('/getRepo',controller.getRepo);
}	
module.exports=init;