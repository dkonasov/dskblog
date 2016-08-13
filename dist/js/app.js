(function(window){
	
	window.dskblog=angular.module('dskblog', 
	[
	
		'ngRoute',
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

(function(window)
{
	
	window.dskblogControllers=angular.module('dskblogControllers', []);
	
	
	
	
	
	
	
}
)(window);
(function()
{
	
	dskblogControllers.controller('IndexController', ['$scope', function($scope)
	{
		
		
		
	}
	]);
	
}()
);
(function()
{
	
	dskblogControllers.controller('LoginController', ['$scope', function($scope)
	{
		
		
		
	}
	]);
	
}
());
(function()
{
	
	dskblogControllers.controller('AdminCategoriesController', ['$scope', function($scope)
	{
		
		
		
	}
	]);
	
}()
);
(function()
{
	
	dskblogControllers.controller('AdminIndexController', ['$scope', function($scope)
	{
		
		
		
	}
	]);
	
}
());
(function()
{
	dskblog.controller('addCategoryModal', ['$http', '$uibModalInstance', '$scope', 'category', function($http, $uibModalInstance, $scope, category)
	{
		
		$scope.category=category;
		$scope.save = function()
		{
			
			console.log($scope.category);
			
		}
		
		$scope.closeModal = function()
		{
			
			$uibModalInstance.dismiss('cancel');
			
		}
		
	}]);
	var categoryComponentController=function($uibModal)
	{
		
		var ctrl = this;
		ctrl.category={'name' : '', 'slug' : ''};
		ctrl.openAddModal = function()
		{
			
			$uibModal.open(
			{
				
				'templateUrl' : '/views/admin/category_add.modal.view.html',
				'controller' : 'addCategoryModal',
				'resolve' : {
					
					
					category : function()
					{
						
						return ctrl.category;
						
					}
					
				}
				
			});
			
		}
		
	}
	
	categoryComponentController.$inject = ['$uibModal'];
	dskblog.component('categoryadmin', { 'templateUrl' : '/views/admin/category.component.view.html', 'controller' : categoryComponentController});
	
}
());
(function()
{
	
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
());