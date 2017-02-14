
var controller=require('./controller')
var path=require('path');
var bodyParser=require('body-Parser');
var init=function(app){
	app.use(bodyParser());
	app.get('/',function(req,res){
		res.sendFile(path.resolve(__dirname+"/../client/index.html"));
	});
	app.post('/submitInfo',controller.submitInfo);
}	
module.exports=init;