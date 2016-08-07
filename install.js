var userdata={isAdmin : true, login : 'admin'};
const config=require("./config.js");
const readline=require('readline-sync');
var password ='';

console.log('DSKBlog install utility');
var login=readline.question('Please, provide login for admin account(default : admin): ');
userdata.login = login.length > 0 ? login : 'admin';
do
{
	
	password=readline.question('Please, provide password for admin account : ', { hideEchoBack: true });
	
}
while(password.length==0);
var passwordMatch=false;
var retypedPassword;
do
{
	
	retypedPassword=readline.question('Please, retype your password : ', { hideEchoBack: true });
	
}
while(password!==retypedPassword);
userdata.password=password;
var mongoose = require('mongoose');
var db=mongoose.connection;
db.on('error', console.error);
db.once('open', function()
{
	
	var User=require('./backend/models/user.js');
	var user=new User(userdata);
	user.save(function(err)
	{
				
		
		if(err)
		{
			
			console.log("There was an error while creating user");
			console.log(err);
			
		}
		else
		{
			
			console.log("User created");
			console.log("Instalation finished");
			
		}
				
	});
	
}
);
mongoose.connect('mongodb://localhost/'+config[config.env].mongodb.db);


