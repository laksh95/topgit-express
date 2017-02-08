var path=require('path');
var init=function(app,express){

	app.use(express.static(path.resolve(__dirname + "/../../client/public")));
}
module.exports=init;