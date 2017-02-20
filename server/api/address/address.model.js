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
			},
			submitAddress:function(db,data,cb){
				console.log('submitAddress called',data);
				db.address.create({
					address_line:data.addressLine,
					city:data.city,
					state:data.state,
					login_id:data.loginid
				}	).then(function(data){	
					console.log('inserted successfully',data);
					cb(data);
				});
			},
			getAddress: function(db,loginid,cb){
				db.address.findAll({
					attributes:['address_line','city','state'],
					where:{
						login_id:loginid
					}
				}).then(function(data){
					console.log(data);
					var addressDetails=data[0].dataValues;
					cb(addressDetails);
				});
				console.log('get address called');

			},
			updateAddress:function(db,data,cb){
				db.address.update({
					address_line:data.addressLine,
					city:data.city,
					state:data.state	
				},{
					where:{
						login_id:data.loginid
					}
				}).then(function(data){
					console.log(data);
					cb(data);
				})
			},
			deleteAddress:function(db,loginid,cb){
				db.address.destroy({
					where:{
						login_id:loginid,
						status:true
					}
				}).then(function(data){
					cb(data);
				})
			}
		}

	});
	sequelize.sync();
	return address;
}
module.exports=init;