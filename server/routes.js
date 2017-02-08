var controller=require('./controller')
var init=function(app){
	app.get('/',controller.getIndex);
	app.get('/getRepo',controller.getRepo);
}	
module.exports=init;