var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', async ()=>{
	gulp.src('src/**/*.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(concat('sketch.js'))
	.pipe(gulp.dest('./public'));
	
	browserSync.reload();
})

gulp.task('html', async ()=>{
	gulp.src('src/**/*.html')
	.pipe(gulp.dest('public/'));
	
	browserSync.reload();
});

gulp.task('run', async ()=>{
	browserSync.init({
		server: {
			baseDir: "./public/"
		}
	});
	gulp.parallel([
		'html',
		'js'
	]);
	gulp.watch('./src/**/*.html', gulp.task('html'));
	gulp.watch('./src/**/*.js', gulp.task('js'));
});