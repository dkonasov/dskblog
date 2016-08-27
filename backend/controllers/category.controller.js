(function()
{
	
	module.exports=function()
	{
		
		var categoryEntityController={};
		categoryEntityController.create = function(req, res)
		{
			
			var Category = require('../models/category.js');
			var category = new Category(req.body);
			category.save(function(err)
			{
				
				if(err)
				{
					
					console.log(err);
					res.status(500).end();
					
				}
				else
				{
					
					
					res.status(200).end();
					
				}
				
				
			}
			);
			
		}
		
		categoryEntityController.read = function(req, res)
		{
			
			var result={name : 'get test'};
			res.json(result);
			
			
		}
		
		
		
		return categoryEntityController;
		
	}
	
}
())