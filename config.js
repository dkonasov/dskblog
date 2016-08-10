module.exports={
	
	env : "dev",
	template : "basic",
	secret : 'donttellthesecret',
	baseDir : __dirname,
	dev : {
		
		port : 8080,
		mongodb : {
			
			db : "dskblog_dev"
			
		}
		
	},
	
	test : {
		
		port : 8080,
		mongodb : {
			
			db : "dskblog_test"
			
		}
		
	}
	
}