import { collection } from 'ember-cli-page-object';
import { findElement } from 'ember-cli-page-object/extend';
import avatar from './avatar';

export default {
	scope: 'div.wds-avatar-stack',

	attr(attribute) {
		return findElement(this).attr(attribute);
	},

	avatars: collection(avatar.scope, {
		item: avatar,
	}),

	overflow: {
		scope: '.wds-avatar-stack__overflow',
	},
};
