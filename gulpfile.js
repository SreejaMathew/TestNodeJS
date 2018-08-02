var gulp = require('gulp');
var scan = require('OSCS_NODEJS');
var options = { dev: true };

gulp.task('scan', function () {
	scan.scandeps();
})