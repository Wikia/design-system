import Helper from '@ember/component/helper';
import {htmlSafe} from '@ember/string'
import translations from 'npm:design-system-i18n/i18n/en/design-system';

export function i18n(params) {
	const key = params[0];

	return htmlSafe(translations[key] || '');
}

export default Helper.helper(i18n);
