(function()
{
	
	module.exports = function(passport)
	{
		
		var authActions={};
		authActions.login = function(req, res, next)
		{
			
			passport.authenticate('local')(req, res, next);
			
		}
		return authActions;
		
	}
	
}
())