describe("Api test", function()
{
	
	var assert = require('assert');
	var config=require("../config.js");
	//var http = require('http');
	var request = require('request');
	/*it('Categories get available', function(done)
	{
		
		this.timeout(15000);
		var options = {
			
			host : '127.0.0.1',
			path : '/api/category/',
			method : 'get',
			port : '8080'
			
		}
		http.request(options, function(res)
		{
			
			
			assert.equal(res.statusCode, 200);
			done();
			
		}
		).end();
		
		
	}
	
	);
	
	it('Test categories are working', function(done)
	{
		
		this.timeout(15000);
		var options = {
			
			host : '127.0.0.1',
			path : '/api/category/',
			method : 'get',
			port : '8080'
			
		}
		http.request(options, function(res)
		{
			
			
			var rawData='';
			res.on('data', function(chunk)
			{
				
				rawData+=chunk;
				
			});
			
			res.on('end', function()
			{
				
				
				var data = JSON.parse(rawData);
				assert(data.name.length > 0);
				done();
				
				
			}
			);
			
		}
		).end();
		
		
	}
	
	);*/
	it('Add category', function(done)
	{
		
		request.post(
		
			'http://127.0.0.1:8080/api/category/', 
			{ form : {
				
				name : 'test',
				slug : 'test'
				
			}},
			function(error, response, body)
			{
				if(error)
				{console.log(error);}
				assert(!error && response.statusCode == 200);
				done();
				
			}
		
		)
		
	}
	);
	
	
	
}
);