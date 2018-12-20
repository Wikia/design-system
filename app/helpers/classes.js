import { helper } from '@ember/component/helper';

export function classes(classList) {
	return classList.filter(Boolean).join(' ');
}

export default helper(classes);
