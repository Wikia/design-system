import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	// Routes with standalone components set this property
	standalone: false,

	navigation: [
		{
			name: 'Overview',
			items: [
				{
					name: 'SVG assets',
					location: 'overview.svg-assets'
				},
			]
		},
		{
			name: 'Base styles',
			items: [
				{
					name: 'Breakpoints',
					location: 'base-styles.breakpoints'
				},
				{
					name: 'Colors',
					location: 'base-styles.colors'
				},
				{
					name: 'Typography',
					location: 'base-styles.typography'
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
					name: 'Global Footer',
					location: 'identity.global-footer'
				},
				{
					name: 'Global Navigation',
					location: 'identity.global-navigation'
				},
			]
		}
	]
});
