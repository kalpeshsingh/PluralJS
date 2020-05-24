'use strict';

import { version } from '../package.json';

/** Helpers **/
import {
	irregularNouns,
	uncountableNouns,
	uncountableNounPatterns,
} from './helpers/dictionary';
import rules from './helpers/rules';

/**
 * The function to return plural based on word and count
 * @param word {string} - A word to make plural
 * @param count {number} - A count to make plural if > 1
 * @returns * {string} - Returns plural word
 */
const pluralJs = (word, count) => {
	if (
		typeof count != 'undefined' &&
		(Number.isNaN(count) || count != Number(count) || Math.round(count) <= 1)
	) {
		return word;
	}

	let result = word;

	/**
	 * If the word already exist in the uncountable noun then return same word.
	 * Singular word with no plural. Example - advice, blood, rice, staff etc.
	 */
	if (uncountableNouns.includes(word)) {
		return word;
	}

	/**
	 * If the word already exist in irregular noun then return the irregular noun.
	 * Example - I => We, stigma => stigmata, die => dice etc.
	 */
	if (irregularNouns[word]) {
		return irregularNouns[word];
	}

	/**
	 * If the word is not part of uncountable nouns and  irregular nouns then apply grammar rules.
	 * If the grammar rules has word then it will store in result and check in uncountableNounPatterns function.
	 * In uncountableNounPatterns function, it won't find the result obtained from rules so it will just return
	 * result obtained from rules.
	 */
	rules.forEach((rule) => {
		if (rule[0].test(word)) {
			result = word.replace(rule[0], rule[1]);
		}
	});

	/**
	 * If all the above condition is failed, then we will check uncountable noun pattern.
	 * If it has then return else return result obtained from rules.
	 */
	uncountableNounPatterns.find((rule) => {
		if (rule.test(word)) {
			result = word;
		}
	});

	return result;
};

pluralJs.VERSION = version;

export default pluralJs;
