var fs=require('fs');
var path=require('path');
var lodash=require('lodash');
exports.getRepo=function(req,res){
	var company=req.query.company;
	var page=req.query.page;
	var items=[];
	fs.readFile(path.resolve(__dirname  +"/data.json"),"utf8",function(err,content)
	{
		var response={
			sucess:"",
			data:"",
			msg:""
		}
		if(err){
			console.log(err);
			response.sucess=false;
			response.msg="500 internal error"
			res.send(JSON.stringify(response));
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
			response.success=true;
			response.data=sendItems;
			res.send(JSON.stringify(response));
		}
		else{
			res.send("null");
		}

		}
	});	
}