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
	var query=client.query("insert into users values($1,$2,$3,$4);",
		[req.body.fname, req.body.lname, req.body.useremail, req.body.passwd],function(err,result){
			if(err)
				throw err;
			else{
				res.sendFile(path.resolve(__dirname + "/../../../client/submit.html"));
			}
			client.end(function(err){
				if(err){
					throw err;
				}
				console.log("connection ended");
			});
	});	 
}