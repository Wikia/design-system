import { findElement } from 'ember-cli-page-object/extend';

export default function attr(attribute) {
	return findElement(this).attr(attribute);
}
