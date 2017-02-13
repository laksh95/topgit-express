var fs=require('fs');
var path=require('path');
var lodash=require('lodash');
function readFile(pathname,type,callback)
{
	fs.readFile(pathname,type,callback);
}
exports.getRepo=function(req,res){
	var company=req.query.company;
	var page=req.query.page;
	var items=[];
	readFile(path.resolve(__dirname  +"/data.json"),"utf8",readHandler);
	function readHandler(err,content){
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
			try{
				var data=JSON.parse(content).items;
			}catch(exp){
				response.sucess=false;
				response.msg="500 internal error";
				res.send(JSON.stringify(response));
			}
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

	}

}