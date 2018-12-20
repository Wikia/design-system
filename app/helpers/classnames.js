import { helper } from '@ember/component/helper';

export function classnames(classList) {
	return classList.filter(Boolean).join(' ');
}

export default helper(classnames);
