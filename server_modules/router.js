(function()
{
	
	exports.start=function(app, config)
	{
		
		app.get("*", function(req, res)
		{
			
			res.render('template');
			
		}
		);
		
	}
	
}
)();