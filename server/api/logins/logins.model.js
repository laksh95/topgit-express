var Sequelize=require('sequelize');
// var sequelize=new Sequelize('users','postgres','password',{
// 	dialect:'postgres',
// });
var init=
{
	user:function(cb){
		var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
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
		cb();
	},
	address: function (cb){
		var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
		var address=sequelize.define('useraddress',{
			id:{
				type:Sequelize.INTEGER,
				primaryKey:true,
				autoIncrement:true
			},
			addressLine:{
				type:Sequelize.STRING
			},
			city:{
				type:Sequelize.STRING
			},
			state:{
				type:Sequelize.STRING
			}
		});
		address.sync();
		cb();
	}
}

module.exports=init;