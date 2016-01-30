var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var svgmin       = require('gulp-svgmin');
var notify       = require('gulp-notify');

// config
var config       = require('../../config/svg');


/**
 * Compress Svgs and
 * move them to the
 * built theme
 *
 */
module.exports = function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(svgmin(config.options.svgmin))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			message: 'Svgs Compressed',
			onLast: true
		}));
};