var pg=require('pg');
var path=require('path');
console.log("controller");
var model=require('./logins.model.js');
exports.submitInfo=function(req,res){
	console.log('calling model');
	model.user(function(response){
	console.log('model called');
	res.send("success");
	});
	model.address(function(){
		console.log("Adress table created");
	})
}