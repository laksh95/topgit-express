var init=function(){
	console.log("sqldb index file");
	var path=require('path');
	var database=require('./../config/database');
	// var Sequelize=require('sequelize');
	// var sequelize=new Sequelize('postgres://postgres:password@localhost:5432/users');
	var modelPathFormat = path.join(__dirname, '../api/{0}/{0}.model.js');
	var models=['login','address'];
	var db={};
	for(var i in models){
		var model=require(modelPathFormat.replace(/\{0\}/g,models[i]))(database.sequelize,database.Sequelize);
		console.log(model+" "+model.name);
		db[model.name]=model;
	}
	Object.keys(db).forEach(function(modelName){
		if('associate' in db[modelName])
			db[modelName].associate(db);
	});
	database.sequelize.sync();
	// users.hasMany(address);
	// address.belongsTo(users);
	// sequelize.sync({force:true});
}
module.exports=init;