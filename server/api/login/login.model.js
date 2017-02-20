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
	},
	{
	classMethods:{
		submitUser:function(db,data,cb){
			db.login.create({
				username:data.name,
				password:data.password
			}).then(function(data){
				console.log(data);
				console.log('tuple inserted successfully');
				cb(data);
			});
		},
		getUser:function(db,data,cb){
			db.login.findAll({
				attributes:['username'],
				where:{
					username:data.name,
					password:data.passwd,
					status:true
				}
			}).then(function(data){
				var validUser= data[0].dataValues;
				console.log(validUser);
				cb(validUser);
			});
		},
		updateUser:function(db,data,cb){
			db.login.update({
				password:data.password
			},{
				where:{
					username:data.name
				}
			}).then(function(data){
				cb(data);
			});
		},
		deleteUser:function(db,data,cb){
			db.login.destroy({
				where:{
					username:data.name,
					status:true
				}
			}).then(function(data){
				console.log("deleted data"+data);
				cb(data);
			})
		}
	}
});
	sequelize.sync();
	return login;
}
module.exports=init;