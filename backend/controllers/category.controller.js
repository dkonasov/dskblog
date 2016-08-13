(function()
{
	
	module.exports=function()
	{
		
		var categoryEntityController={};
		categoryEntityController.read = function(req, res)
		{
			
			var result={'name' : 'get test'};
			res.json(result);
			
			
		}
		
		return categoryEntityController;
		
	}
	
}
())