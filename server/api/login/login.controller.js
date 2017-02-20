var path=require('path');
var database=require('./../../config/database');
var sqldb = require('./../../sqldb');
var db=sqldb();
console.log(db);
console.log("controller");
var model=require('./login.model');
var loginFunc={
	checkInfo:function(req,res){
		var uname=req.body.username;
		var pass=req.body.password;
		var data={
			name:uname,
			passwd:pass
		}
		model(database.sequelize,database.Sequelize).getUser(db,data,function(response){
			res.send(response);
		});		
	},
	submitInfo:function(req,res){
		var uname=req.body.username;
		var passwd=req.body.password;
		var data={
			name:uname,
			password:passwd
		}
		model(database.sequelize,database.Sequelize).submitUser(db,data,function(response){
			res.send(response);
		});

	},
	updateInfo:function(req,res){
		var uname=req.body.username;
		var passwd=req.body.password;
		var data={
			name:uname,
			password:passwd
		}
		model(database.sequelize,database.Sequelize).updateUser(db,data,function(result){
			console.log(result);
			// res.send("Data deleted");
		});
	},
	deleteInfo:function(req,res){
		var uname=req.body.username;
		var data={
			name:uname
		}
		model(database.sequelize,database.Sequelize).deleteUser(db,data,function(response){
			res.send("deleted successfully");
			
		});
	}
}

module.exports=loginFunc;
