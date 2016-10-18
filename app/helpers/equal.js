import Ember from 'ember';

/**
 * Check if two arguments are equals
 *
 * @param {Array} params
 * @returns {string}
 */
export default Ember.Helper.helper((params) => {
	return params[0] === params[1];
});
