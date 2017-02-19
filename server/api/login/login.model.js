var init=function(sequelize,Sequelize){
	console.log('login model called');
	var login= sequelize.define('login',{
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
			defaultValue:true
					}
	},{
	classMethods:{
		submitUser:function(db,data){
			db.login.create({
				username:data.name,
				password:data.password
			}).then(function(){
				console.log('tuple inserted successfully');
			});

		}
	}
});
	sequelize.sync();
	return login;
}
module.exports=init;