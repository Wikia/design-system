import Helper from '@ember/component/helper';
import {htmlSafe} from '@ember/string'
import translations from 'npm:design-system-i18n/i18n/en/design-system';

export function svg(params) {
	const key = params[0];

	return new htmlSafe(translations[key] || '');
}

export default Helper.helper(svg);
