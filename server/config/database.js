var Seq=require('sequelize');
var option={
	define:{
		freezeTableName:true,
		underscored:true,
		timestamps:false
	}
}
var seq=new Seq('postgres://postgres:password@localhost:5432/users',option);
var data={
	Sequelize:Seq,
	sequelize:seq
}	
module.exports=data;