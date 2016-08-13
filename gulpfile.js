var gulp = require('gulp');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
gulp.task('default', function(callback)
{
	
	runSequence("less",
				"bootstrap",
				'angularlibs',
				"appscripts",
				"views",
				"adminviews",
              callback);
	
});
gulp.task('less', function()
{
	
	return gulp.src('./frontend/less/*.less')
	.pipe(less({}))
	.pipe(gulp.dest('./dist/css'));
	
}
);

gulp.task('bootstrap', function()
{
	
	return gulp.src('./bower_components/bootstrap/dist/*/*.*')
	.pipe(gulp.dest('./dist/bootstrap'));
	
}
);

gulp.task('angularlibs', function()
{
	
	return gulp.src(
	[
	
		'./bower_components/angular/angular.min.js',
		'./bower_components/angular/angular.min.js.map',
		'./bower_components/angular-route/angular-route.min.js',
		'./bower_components/angular-route/angular-route.min.js.map',
		'./bower_components/angular-bootstrap/ui-bootstrap.min.js',
		'./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
		
		
	])
	.pipe(gulp.dest('./dist/angular'));
	
}
);

gulp.task('appscripts', function()
{
	
	return gulp.src(
	[
		
		'./frontend/js/app/app.js',
		'./frontend/js/app/controllers.js',
		'./frontend/js/app/controllers/*.js',
		'./frontend/js/app/controllers/admin/*.js',
		'./frontend/js/app/components/*.js',
		
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./dist/js'));
	
}
);

gulp.task('views', function()
{
	
	return gulp.src('./frontend/views/*.view.html')
	.pipe(gulp.dest('./dist/views'));
	
}
);

gulp.task('adminviews', function()
{
	
	return gulp.src('./frontend/views/admin/*.view.html')
	.pipe(gulp.dest('./dist/views/admin'));
	
}
);
