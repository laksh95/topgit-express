var Seq=require('sequelize');
var seq=new Seq('postgres://postgres:password@localhost:5432/users');
var data={
	Sequelize:Seq,
	sequelize:seq
}	
module.exports=data;