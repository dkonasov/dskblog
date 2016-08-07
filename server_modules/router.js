(function()
{
	
	exports.start=function(app, config)
	{
		
		app.get('/admin/*', function(req, res)
		{
			
			res.render('admin');
			
		}
		)
		.get("*", function(req, res)
		{
			
			res.render('template');
			
		}
		);
		
	}
	
}
)();