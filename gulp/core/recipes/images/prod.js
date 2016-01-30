var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var imagemin     = require('gulp-imagemin');
var notify       = require('gulp-notify');


// config
var config       = require('../../config/images');


/**
 * Compress Images and
 * move them to the
 * built theme
 *
 */
module.exports = function () {
	return gulp.src(config.paths.src)
		.pipe(plumber())

		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))

		.pipe(gulp.dest(config.paths.dest))
		.pipe(notify({
			message: 'Images Compressed',
			onLast: true
		}));
};