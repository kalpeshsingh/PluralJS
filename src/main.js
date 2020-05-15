'use strict';

/** Helpers **/
import endsWith from './helpers/endsWith';
import dictionary from './helpers/dictionary';

const pluralJs = (string) => {
	if (dictionary[string]) {
		return dictionary[string];
	} else if (endsWith(string, 'us')) {
		return string.replace(/us$/, 'i');
	} else if (endsWith(string, 'is')) {
		return string.replace(/is$/, 'es');
	} else if (endsWith(string, 'on')) {
		return string.replace(/on$/, 'a');
	} else if (endsWith(string, ['s', 'ss', 'sh', 'ch', 'x', 'z', 'o'])) {
		return `${string}es`;
	} else if (endsWith(string, ['f', 'fe'])) {
		return string.replace(/fe|f$/, 'ves');
	} else if (endsWith(string, 'y')) {
		if (['a', 'e', 'i', 'o', 'u'].includes(string.substr(-2, 1))) {
			return `${string}s`;
		} else {
			return string.replace(/.$/, 'ies');
		}
	} else {
		return `${string}s`;
	}
};

export default pluralJs;
