'use strict';

/**
 * A helper function to check if `string` ends with the given search value(s).
 * @param {string} [string=''] The string to check.
 * @param {string} [search] The string or array to search for.
 * @returns {boolean} Returns `true` if `string` ends with `search` else `false`,
 * @author {human} Kalpesh Singh
 */
const endsWith = (string = '', search) => {
	if (Array.isArray(search)) {
		return search.some((keyword) => string.endsWith(keyword));
	} else if (typeof search === 'string') {
		return string.endsWith(search);
	} else {
		return false;
	}
};

export default endsWith;
