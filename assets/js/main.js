/**
 * Setup webpack public path
 * to enable lazy-including of
 * js chunks
 *
 */
import './vendor/webpack.publicPath';


// silly example:
import obj from './scripts/example';
import test from './scripts/test';


/* eslint no-console: 0 */
console.log(obj);

console.log(test);
