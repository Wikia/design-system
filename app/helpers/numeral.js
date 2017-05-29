import Ember from 'ember';
import numeral from 'numeral';

/**
 * @param {Array} params
 * @returns {string}
 */
export default Ember.Helper.helper(([numberToFormat, format]) => {
	return numeral(numberToFormat).format(format);
});
