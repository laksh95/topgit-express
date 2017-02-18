var init=function(sequelize,Sequelize){
	console.log("model from address");
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
				Login.hasOne(Address);
				Address.belongsTo(Login);
			},
			submitAddress:function(data){
				console.log('submitAddress called');
				address.create({
					addressLine:data.addressLine,
					city:data.city,
					state:data.state,
					loginId:10
				}).then(function(){
					console.log('inserted successfully');
				})
			}

		}

	});
	sequelize.sync();
	return address;
}
module.exports=init;