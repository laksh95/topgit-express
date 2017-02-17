var init=function(sequelize,Sequelize){
	console.log()
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
	},{
		classMethods:{
			associate:function(model){
				var Login=model.login;
				var Address=model.address;
				Login.hasMany(Address);
			}

		}

	});
	sequelize.sync();
	return address;
}
module.exports=init;