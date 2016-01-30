// utils
var deepMerge = require('../utils/deepMerge');

// config
var overrides = require('../../config/common');


/**
 * Common config
 * for all tasks
 *
 */
module.exports = deepMerge({
	paths: {
		assets: {
			src: 'assets',
			dest: 'dist'
		}
	}
}, overrides);