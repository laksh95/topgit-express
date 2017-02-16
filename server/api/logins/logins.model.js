var Sequelize=require('sequelize');
var init=function(cb){
	var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
	var loginCredentials=sequelize.define('login',{
		id:{
			type:Sequelize.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		username:{
			type:Sequelize.STRING,
			allowNull:false,
			unique:true
		},
		password:{
			type:Sequelize.STRING,
			allowNull:false
		},
		status:{
			type:Sequelize.BOOLEAN,
			default:true
		}
	});
	loginCredentials.sync();	
	cb();
}
module.exports=init;