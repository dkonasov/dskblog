describe("useradd", function()
{
	
	var assert = require('assert');
	var config=require("../config.js");
	var mongoose = require('mongoose');
	before(function (done) 
	{
			
		mongoose.connect('mongodb://localhost/'+config.test.mongodb.db, done);
			
	});
	
	it('should add user', function(done)
	{
		
		var userData={
				
				login : "testuser",
				password : "kmmm2014",
				isAdmin : true
				
				
			};
			
		var User=require('../backend/models/user.js');
		var user=new User(userData);
		user.save(function(err)
		{
				
			assert.equal(err==null, true);
			done();
				
		});
		
	}
	);
	
	it('should not add user without login', function(done)
	{
		
		var userData={
				
				login : "",
				password : "kmmm2014",
				isAdmin : true
				
				
			};
			
		var User=require('../backend/models/user.js');
		var user=new User(userData);
		user.save(function(err)
		{
				
			assert.equal(err!=null, true);
			done();
				
		});
		
	}
	);
	
	it('should not add user without password', function(done)
	{
		
		var userData={
				
				login : "testuser2",
				password : "",
				isAdmin : true
				
				
			};
			
		var User=require('../backend/models/user.js');
		var user=new User(userData);
		user.save(function(err)
		{
				
			assert.equal(err!=null, true);
			done();
				
		});
		
	}
	);
	
}
);