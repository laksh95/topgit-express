var pg=require('pg');
var connectionString="postgres://postgres:password@localhost:5432/company";
var client=new pg.Client(connectionString);
var path=require('path');
console.log("controller");
client.connect(function(err){
	if(err)
		throw err;
});

exports.submitInfo=function(req,res){
	console.log("hello world");
	console.log(req.body.fsname, req.body.lsname, req.body.uemail, req.body.upasswd);
	console.log("ok");
	var query=client.query("insert into users values($1,$2,$3,$4);",
		[req.body.fsname, req.body.lsname, req.body.uemail, req.body.upasswd],function(err,result){
			console.log(result);
			if(err)
				throw err;
			else{
				console.log("succsss");	
				res.send("success");
				
			}
			client.end(function(err){
				if(err){
					throw err;
				}
				console.log("connection ended");
			});
	});	 
}