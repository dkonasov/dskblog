(function()
{
	
	var mongoose = require('mongoose');
	var userSchema=new mongoose.Schema
	(
	
		{
			
			login : {type : String, unique : true, required : true},
			password : {type : String, required : true, set : function(password)
			{
		
				if (password==="") return password;
				var crypto = require('crypto');
		
				return crypto.createHash('sha1').update(password).digest('hex');
		
		
		
			}},
			isAdmin : {type : Boolean}
			
		}
	
	);
	var User=mongoose.model("User", userSchema);
	module.exports=User;
}
)()