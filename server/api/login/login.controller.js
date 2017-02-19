var path=require('path');
var database=require('./../../config/database');
var sqldb = require('./../../sqldb');
var db=sqldb();
console.log(db);
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
		model(database.sequelize,database.Sequelize).submitUser(db,data);

	}
}

module.exports=loginFunc;
