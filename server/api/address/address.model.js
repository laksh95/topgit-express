var init=function(sequelize,Sequelize){
	console.log("model from address");
	var address=sequelize.define('address',{
		id:{
			type:Sequelize.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		address_line:{
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
			defaultValue:true
		}
	},{
		classMethods:{
			associate:function(model){
				var Login=model.login;
				var Address=model.address;
				Login.hasMany(Address,{
					foreignKey:"login_id"
				});
				// Address.belongsTo(Login);
			},
			submitAddress:function(db,data){
				console.log('submitAddress called',data);
				db.address.create({
					address_line:data.addressLine,
					city:data.city,
					state:data.state,
					login_id:data.loginid
				}	).then(function(data){	
					console.log('inserted successfully',data);
				})
			}

		}

	});
	sequelize.sync();
	return address;
}
module.exports=init;