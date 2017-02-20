var path=require('path');
var database=require('./../../config/database');
var sqldb = require('./../../sqldb');
var db=sqldb();
console.log(db);
console.log("controller from address");
var model=require('./address.model');
var addressFunc={
	submitAddress: function(req,res){
		var adLine=req.body.addressLine;
		var city=req.body.city;
		var state=req.body.state;
		var loginid=req.body.loginid;
		var data={
			addressLine:adLine,
			city:city,
			state:state,
			loginid:loginid
		}
		console.log(data);
		model(database.sequelize,database.Sequelize).submitAddress(db,data,function(response){
			res.send("address added successfully"+response);
		});
	},
	getAddress:function(req,res){
		var loginid=req.query.loginid;
		model(database.sequelize,database.Sequelize).getAddress(db,loginid,function(response){
			res.send(response);
		});	
	},
	updateAddress:function(req,res){
		var adLine=req.body.addressLine;
		var city=req.body.city;
		var state=req.body.state;
		var loginid=req.body.loginid;
		var data={
			addressLine:adLine,
			city:city,
			state:state,
			loginid:loginid
		}
		console.log(data);
		model(database.sequelize,database.Sequelize).updateAddress(db,data,function(response){
			res.send(response);
		});
	},
	deleteAddress:function(req,res){
		var loginid=req.query.loginid;
		model(database.sequelize,database.Sequelize).deleteAddress(db,loginid,function(response){
			console.log(response);
			res.send("deleted successfully");
		});

	}
}
module.exports=addressFunc;