var path=require('path');
var express=require('express');
var bodyParser=require('body-Parser');
var init=function(app){
	app.use(bodyParser.text());
	app.use(express.static(path.resolve(__dirname + "/../../client/public")));
}
module.exports=init;