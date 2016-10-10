import Ember from 'ember';
import translations from 'npm:design-system-i18n/i18n/en/design-system';

const {Helper, String} = Ember;

export function svg(params) {
	const key = params[0];

	return new String.htmlSafe(translations[key] || '');
}

export default Helper.helper(svg);
