import pkg from './package.json';

/** Plugins **/
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';

export default {
	input: 'src/main.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
		{ file: pkg.browser, format: 'umd', name: 'pluralJS' },
	],
	plugins: [
		json(),
		babel({ exclude: 'node_modules/**' }),
		terser({ include: [/^.+\.min\.js$/] }),
		filesize(),
	],
};
