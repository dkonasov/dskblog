(function()
{
	
	var dskblog=angular.module('dskblog', 
	[
	
		'ngRoute',
		'dskblogControllers'
	
	]
	);
	
	dskblog.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
	{
		
		$routeProvider.when('/', 
		{
			
			"templateUrl" : "/views/index.view.html",
			"controller" : "IndexController"
			
		});
		
	}
	])
	
}
)()