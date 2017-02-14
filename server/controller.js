
var fs=require('fs');
var path=require('path');

var pg=require('pg');
var connectionString="postgres://postgres:password@localhost:5432/company";
var client=new pg.Client(connectionString);
client.connect();
exports.submitInfo=function(req,res){
	var query=client.query("insert into users values('"+req.body.fname+"','"+
		req.body.lname+"','"+req.body.useremail+"','"+req.body.passwd+"');")
	res.sendFile(path.resolve(__dirname+"/../client/submit.html"));
}