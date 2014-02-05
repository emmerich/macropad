var gulp = require("gulp"),
	zip = require("gulp-zip"),
	clean = require("gulp-clean"),
	flatten = require("gulp-flatten");

gulp.task('default', function(){
	gulp.src("./src/**/*")
		.pipe(zip("app.nw"))
		.pipe(gulp.dest("bin"));
});

gulp.task('clean', function() {
	gulp.src("./bin")
		.pipe(clean());
});