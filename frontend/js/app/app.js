(function(window){
	
	window.dskblog=angular.module('dskblog', 
	[
	
		'ngRoute',
		'ngResource',
		'dskblogControllers',
		'ui.bootstrap'
	
	]
	);
	
	dskblog.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
	{
		
		$routeProvider.when('/', 
		{
			
			"templateUrl" : "/views/index.view.html",
			"controller" : "IndexController"
			
		})
		.when('/login/', 
		{
			
			"templateUrl" : "/views/login.view.html",
			"controller" : "LoginController"
			
		})
		.when('/admin/', 
		{
			
			"templateUrl" : "/views/admin/index.view.html",
			"controller" : "AdminIndexController"
			
		})
		.when('/admin/category/', 
		{
			
			"templateUrl" : "/views/admin/category.view.html",
			"controller" : "AdminCategoriesController"
			
		});
		
		$locationProvider.html5Mode(true);
		
	}
	]);
	
	
	
}
)(window);
