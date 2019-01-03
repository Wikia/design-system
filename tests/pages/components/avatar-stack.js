import { collection } from 'ember-cli-page-object';
import attr from '../helpers/attr';
import avatar from './avatar';

export default {
	scope: 'div.wds-avatar-stack',

	attr,

	avatars: collection(avatar.scope, {
		item: avatar,
	}),

	overflow: {
		scope: '.wds-avatar-stack__overflow',
	},
};
