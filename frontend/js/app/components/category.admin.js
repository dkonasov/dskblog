(function()
{
	dskblog.controller('addCategoryModal', ['$http', '$uibModalInstance', '$scope', 'category', 'Categories', function($http, $uibModalInstance, $scope, category, Categories)
	{
		
		$scope.category=category;
		$scope.save = function()
		{
			
			Categories.save($scope.category, function(response){console.log(response)});
			
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