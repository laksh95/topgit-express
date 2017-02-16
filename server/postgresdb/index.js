var init=function(){
	var Sequelize=require('sequelize');
	var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
}
module.exports=init;