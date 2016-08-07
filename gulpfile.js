var gulp = require('gulp');
var less = require('gulp-less');
var runSequence = require('run-sequence');
gulp.task('default', function(callback)
{
	
	runSequence("less",
				"bootstrap",
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
