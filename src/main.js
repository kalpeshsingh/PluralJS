'use strict';

/** Helpers **/
import endsWith from './helpers/endsWith';

const pluralJs = (string) => {
	return endsWith(string, ['s']);
};

export default pluralJs;
