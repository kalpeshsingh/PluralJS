import pkg from './package.json';
import filesize from 'rollup-plugin-filesize';

export default {
	input: 'src/main.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
		{ file: pkg.browser, format: 'umd', name: 'pluralJS' },
	],
	plugins: [filesize()],
};
