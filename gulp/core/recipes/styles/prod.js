var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify       = require('gulp-minify-css');
var notify       = require('gulp-notify');

// config
var config       = require('../../config/styles');


/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
module.exports = function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())
		.pipe(sass({
     		includePaths: require('node-bourbon').includePaths,
     		includePaths: require('node-neat').includePaths
    }))
		.pipe(sass.sync(config.options.sass).on('error', sass.logError))
		.pipe(autoprefixer(config.options.autoprefixer))
		
		.pipe(minify(config.options.minify))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			message: 'SCSS Compiled & Minified.',
			onLast: true
		}));
};