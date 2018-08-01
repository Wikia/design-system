/**
 * @typedef {Object} LocalStorage
 * @property {Function} setItem
 * @property {Function} getItem
 * @property {Function} removeItem
 * @property {Function} clear
 */

/**
 * localStorage-compatible in-memory object
 */
export const localStorageAdapter = {
	_data: {},

	/**
	 * @param {string} key
	 * @param {string} value
	 * @returns {string}
	 */
	setItem(key, value) {
		const val = String(value);

		this._data[key] = val;
		return val;
	},

	/**
	 * @param {string} key
	 * @returns {string|undefined}
	 */
	getItem(key) {
		if (this._data.hasOwnProperty(key)) {
			return this._data[key];
		}

		// non-explict return undefined
	},

	/*
	 * @param {string} key
	 * @returns {string}
	 */
	removeItem(key) {
		const val = this._data[key];

		delete this._data[key];
		return val;
	},

	/**
	 * @returns {void}
	 */
	clear() {
		this._data = {};
	}
};

// Check if we have local storage available
let localStorageAvailable = false;

try {
	const test = 'testLocalStorage';

	localStorage.setItem(test, test);
	localStorage.removeItem(test);
	localStorageAvailable = true;
} catch (e) {
	localStorageAvailable = false;
}

/**
 * Returns window.localStorage or compatible in-memory object
 *
 * @returns {LocalStorage}
 */
export default localStorageAvailable ? window.localStorage : localStorageAdapter;
