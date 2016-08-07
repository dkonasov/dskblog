(function()
{
	
	var express=require('express');
	var app=express();
	
	var start=function(config)
	{
		
		var router=require('../server_modules/router');
		app.use(express.static('dist'));
		router.start(app, config);
		var port=config[config.env].port;
		app.set('view engine', 'jade');
		app.set('views', config.baseDir+'/frontend/templates/'+config.template);
		
		var server=app.listen(port, function()
		{
		
			console.log('DSKBlog server started');

		});
		
	}
	exports.start=start;
}
())