var fs=require('fs');
var path=require('path');
var lodash=require('lodash');
exports.getIndex=function(req, res){
	res.sendFile(path.resolve(__dirname+"/../client/index.html"));
}
exports.getRepo=function(req,res){
	var company=req.query.company;
	var page=req.query.page;
	var items=[];
	fs.readFile(path.resolve(__dirname  +"/data.json"),"utf8",function(err,content)
	{
		if(err){
			console.log(err);
			res.writeHead(404, {"Content-Type": "text/plain"});
    		res.write("404 Not found");
			res.end();
		}
		else
		{
			var data=JSON.parse(content).items;
			if(data!=null){
			for(var i=0;i<data.length;i++)
			{
				if(lodash.includes(data[i].full_name,company))
				{	
					items.push(data[i]);
				}
			}
			var sendItems=[];
			i=(page-1)*10;
			for(;i<page*10;i++)
				sendItems.push(items[i]);
			res.send(JSON.stringify(sendItems));
		}
		else{
			res.send("null");
		}

		}
	});	
}