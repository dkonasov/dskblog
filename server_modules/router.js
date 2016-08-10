(function()
{
	module.exports=function(passport, app, config)
	{
		var router = {};
		router.start=function()
	{
		
		app.post('/auth/:action/', function(req, res, next)
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