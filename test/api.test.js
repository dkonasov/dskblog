describe("Api test", function()
{
	
	var assert = require('assert');
	var config=require("../config.js");
	//var http = require('http');
	var request = require('request');
/*
	it('Get categories list', function(done)
	{
		
		request.get('http://127.0.0.1:8080/api/category/', function(error, response, body)
		{
			
			console.log(body);
			assert(!error && response.statusCode == 200);
			done();
			
		}
		);
		
	}
	);
	
	*/
	it('Get single category', function(done)
	{
		
		request.get('http://127.0.0.1:8080/api/category/', function(error, response, body)
		{
			console.log(body);
			var articles = JSON.parse(body);
			console.log('http://127.0.0.1:8080/api/category/' + articles[0]._id);
			request.get('http://127.0.0.1:8080/api/category/' + articles[0]._id, function(error, response, body)
			{
				
				console.log(body);
				assert(!error && response.statusCode == 200);
				done();
				
			}
			);
			
		}
		);
		
	}
	);
}
);