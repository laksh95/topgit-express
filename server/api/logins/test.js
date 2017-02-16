var Sequelize=require('sequelize');
// var sequelize=new Sequelize('users','postgres','password',{
// 	dialect:'postgres',
// });
var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/company');
exports.createTable=function(){
	console.log('model');
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
		}
	});
	loginCredentials.sync();	
}
