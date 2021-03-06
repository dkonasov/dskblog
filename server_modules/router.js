(function()
{
	module.exports=function(passport, app, config)
	{
		var router = {};
		router.start=function()
	{
		
		app.get('/api/:entity/', function(req, res)
		{
			
			
			var entityController;
			try
			{
				
				entityController=require('../backend/controllers/'+req.params.entity+'.controller.js')();
				entityController.read(req, res);
				
			}
			catch(err)
			{
				
				console.log(err);
				res.status(404).end();
				
			}
			
		}
		
		)
		.get('/api/:entity/:id', function(req, res)
		{
			
			var entityController;
			try
			{
				
				entityController=require('../backend/controllers/'+req.params.entity+'.controller.js')();
				entityController.read(req, res);
				
			}
			catch(err)
			{
				
				console.log(err);
				res.status(404).end();
				
			}
			
		}
		)
		.post('/api/:entity/', function(req, res)
		{
			
			
			var entityController;
			try
			{
				
				entityController=require('../backend/controllers/'+req.params.entity+'.controller.js')();
				entityController.create(req, res);
				
			}
			catch(err)
			{
				
				console.log(err);
				res.status(404).end();
				
			}
			
		}
		
		)
		.post('/api/:entity/:id', function(req, res)
		{
			
			var entityController;
			try
			{
				
				entityController=require('../backend/controllers/'+req.params.entity+'.controller.js')();
				entityController.update(req, res);
				
			}
			catch(err)
			{
				
				console.log(err);
				res.status(404).end();
				
			}
			
		})
		.delete('/api/:entity/:id', function(req, res){


			var entityController;
			try
			{
				
				entityController=require('../backend/controllers/'+req.params.entity+'.controller.js')();
				entityController.delete(req, res);
				
			}
			catch(err)
			{
				
				console.log(err);
				res.status(404).end();
				
			}


		})
		.post('/auth/:action/', function(req, res, next)
		{
			
			var controller;
			try
			{
		
				controller=require('./auth.js')(passport);
				controller[req.params.action](req, res, next);
		
			} catch (err)
			{
		
				console.log("auth error : "+err);
				res.status(500).end();
		
			}
			
		},
		function(req, res)
		{
			
			res.status(200).end();
			
		}
		)
		.get('/admin/*', function(req, res)
		{
			
			
			if(req.isAuthenticated() && req.user.isAdmin)
				res.render('admin');
			else
				res.redirect("/login/");
			
		}
		)
		.get("*", function(req, res)
		{
			
			res.render('template');
			
		}
		);
		
	}
		return router;
	}
	
	
}()
);