(function()
{
	
	module.exports=function()
	{
		
		var categoryEntityController={};
		categoryEntityController.create = function(req, res)
		{
			if(req.isAuthenticated() && req.user.isAdmin){

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

			} else {

				res.status(401).end();


			}
			
			
		}
		
		categoryEntityController.read = function(req, res)
		{
			var Category = require('../models/category.js');
			if(!req.params.id)
			{
				
				var paginator = req.query.paginator ? JSON.parse(req.query.paginator) : {};
				var sort = req.query.sort ? JSON.parse(req.query.sort) : {};
				Category.find().sort(sort).skip(paginator.skip).limit(paginator.limit).exec(function(err, result)
				{
					
					if(err)
					{
						
						console.log(err);
						res.status(500).end();
						
					}
					else
					{
						
						Category.count(function(err, count)
						{
							
							if(err)
							{
								
								console.log(err);
								res.status(500).end();
								
							}
							else
							{
								
								res.set('TotalElements', count);
								res.json(result);
								
							}
							
						}
						);
						
					}
					
				}
				);
				
				
			}
			else
			{
				
				Category.findById(req.params.id, function(err, result)
				{
					
					if(err)
					{
						
						console.log(err);
						res.status(500).end();
						
					}
					else
					{
						
						res.json(result);
						
					}
					
				}
				);
				
			}
			
			
			
			
		}
		
		categoryEntityController.update = function(req, res)
		{
			
			if(req.isAuthenticated() && req.user.isAdmin){

				if(req.params.id)
			{
				
				var Category = require('../models/category.js');
				delete req.body.category._id;
				Category.findByIdAndUpdate(req.params.id, req.body.category, function(err, result)
				{
					
					if(!err)
					{
				
						res.status(200).end();
				
					} else 
					{
				
						console.log(err);
						res.status(500).end();
				
					}
					
				}
				);
				
			}
			else
			{
				
				console.log("trying to modify category without id!");
				res.status(500).end();
				
			}


			} else {

				res.status(401).end();


			}
			
			
		}
		
		categoryEntityController.delete = function(req, res)
		{
			if(req.isAuthenticated() && req.user.isAdmin){

				if(req.params.id){

					var Category = require('../models/category.js');
					Category.findByIdAndRemove(req.params.id, function(){

						res.status(200).end();

					});

				} else {

					console.log("trying to delete category without id!");
					res.status(500).end();

				}

			} else {

				res.status(401).end();


			}
			

		}
		return categoryEntityController;
		
	}
	
}
())