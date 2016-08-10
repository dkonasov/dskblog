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
			
		})
		.when('/login/', 
		{
			
			"templateUrl" : "/views/login.view.html",
			"controller" : "LoginController"
			
		});
		
		$locationProvider.html5Mode(true);
		
	}
	]);
	
	var loginComponentController=function($http)
	{
		
		var ctrl=this;
		ctrl.loginError = false;
		ctrl.serverError = false;
		ctrl.user={
			
			'username' : '',
			'password' : ''
			
		}
		
		ctrl.authorize=function()
		{
			
			
			
			$http.post('/auth/login/', ctrl.user).then(function(response)
			{
				ctrl.serverError = false;
				ctrl.loginError = false;
				location.href="/";
				
			},
			function(response)
			{
				
				if(response.status==500)
				{
					
					ctrl.serverError = true;
					
				}
				else
				{
					
					ctrl.loginError=true;
					
				}
				
			}
			);
			
		}
		
	};
	loginComponentController.$inject = ['$http'];
	
	dskblog.component('login', { 'templateUrl' : '/views/login.component.view.html', 'controller' : loginComponentController});
	
}
)()