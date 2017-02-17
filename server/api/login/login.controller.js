var pg=require('pg');
var path=require('path');
var database=require('./../../config/database');
console.log("controller");
var model=require('./login.model');
	var loginFunc={
	checkInfo:function(req,res){
		
	},
	submitInfo:function(req,res){
		var uname=req.body.username;
		var passwd=req.body.password;
		var data={
			name:uname,
			password:passwd
		}
		model(database.sequelize,database.Sequelize).submitUser(data);

	}
}

module.exports=loginFunc;
