var path=require('path');
var database=require('./../../config/database');
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
		model(database.sequelize,database.Sequelize).submitAddress(data);
	}
}
module.exports=addressFunc;