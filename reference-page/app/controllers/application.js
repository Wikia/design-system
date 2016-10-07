import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
		{
			name: 'Base styles',
			items: [
				{
					name: 'Colors',
					location: 'base-styles.colors'
				},
				{
					name: 'Typography',
					location: 'base-styles.typography'
				},
				{
					name: 'Breakpoints',
					location: 'base-styles.breakpoints'
				},
			]
		},
		{
			name: 'Components',
			items: [
				{
					name: 'Assets',
					location: 'route-components.assets'
				},
				{
					name: 'Avatars',
					location: 'route-components.avatars'
				},
				{
					name: 'Buttons',
					location: 'route-components.buttons'
				},
				{
					name: 'Dropdowns',
					location: 'route-components.dropdowns'
				},
				{
					name: 'Lists',
					location: 'route-components.lists'
				}
			]
		},
		{
			name: 'Identity',
			items: [
				{
					name: 'Assets',
					location: 'identity.assets'
				},
				{
					name: 'Global footer',
					location: 'identity.global-footer'
				},
			]
		}
	]
});
