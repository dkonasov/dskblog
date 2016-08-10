(function(passport)
{
	
	var express=require('express');
	var app=express();
	var mongoose = require('mongoose');
	var bodyParser=require('body-parser');
	passport = require('passport');
	var LocalStrategy  = require('passport-local').Strategy;
	var User=require("../backend/models/user.js");
	
	
	
	var start=function(config)
	{
		var db=mongoose.connection;
		db.on('error', console.error);
		db.once('open', function()
		{
			app.use(require('cookie-parser')());
			app.use(bodyParser.urlencoded({ extended: true }));
			app.use(require('express-session')({ secret: config.secret, resave: false, saveUninitialized: false }));
			app.use(passport.initialize());
			app.use(passport.session());
			app.use(bodyParser.json());
			passport.use(new LocalStrategy(function(username, password, done)
			{
		
		
				User.findOne({ login : username},function(err,user)
				{
			
					if(err)
					{
				
						return done(err);
				
					} else 
					{
				
						var crypto = require('crypto');
						hashedPassword=crypto.createHash('sha1').update(password).digest('hex');
						if(!user || user.password!==hashedPassword)
						{
					
							return done(null, false, {message : "Не найден пользователь с таким именем или паролем"});
					
						} else 
						{
					

							return done(null, user)
					
						}
				
					}
			
				});
		
			}));
			
			passport.serializeUser(function(user, done) 
			{
		
				done(null, user.id);
			});
			
			passport.deserializeUser(function(id, done) 
			{
	
				User.findById(id).exec(function(err,user)
				{
	 
					err 
						? done(err)
						: done(null,user);
				});
			});
			
			var router=require('../server_modules/router.js')(passport, app, config);
			app.use(express.static('dist'));
			router.start();
			var port=config[config.env].port;
			app.set('view engine', 'jade');
			app.set('views', config.baseDir+'/frontend/templates/'+config.template);
		
			var server=app.listen(port, function()
			{
		
				console.log('DSKBlog server started');

			});
			
		});
		
		mongoose.connect('mongodb://localhost/'+config[config.env].mongodb.db);
		
	}
	exports.start=start;
}()
)