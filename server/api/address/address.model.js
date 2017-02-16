var Sequelize=require('sequelize');
var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
var init=function(cb){
	var address=sequelize.define('address',{
		id:{
			type:Sequelize.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		addressLine:{
			type:Sequelize.STRING,
			allowNull:false
		},
		city:{
			type:Sequelize.STRING,
			allowNull:false
		},
		state:{
			type:Sequelize.STRING,
			allowNull:false
		},
		status:{
			type:Sequelize.BOOLEAN,
			default:true
		}
	});
	address.sync();
	cb();
}
module.exports=init;