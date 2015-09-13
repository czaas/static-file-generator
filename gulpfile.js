var gulp = require('gulp'),
	bs = require('browser-sync'),
	reload = bs.reload,
	scss = require('gulp-sass'),
	html = require('gulp-html-minifier');
	
gulp.task('css', function(){
	gulp.src('./_interface/scss/*.scss')
	.pipe(scss().on('err', scss.logError))
	.pipe(gulp.dest('./_interface/css/'))
	.pipe(reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src('./_interface/html/*.html')
    .pipe(html({collapseWhitespace: true}))
    .pipe(gulp.dest('./_interface/'))
	.pipe(reload({stream: true}));
});

gulp.task('watch', function(){
	bs.init({
		server: {
			baseDir: './_interface/',
			middleware: function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}		
	});
	
		
	
	gulp.watch('./_interface/scss/*.scss', ['css']);
	//gulp.watch('/js/*.js', ['js']);
	gulp.watch('./_interface/html/*.html', ['html']);
})

gulp.task('default', ['watch']);