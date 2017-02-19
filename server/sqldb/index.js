var models=['login','address'];
var db={};
console.log("sqldb index file");
var path=require('path');
var database=require('./../config/database');
var modelPathFormat = path.join(__dirname, '../api/{0}/{0}.model.js');
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
var sqldb=function(){
	return db;
}
module.exports=sqldb;