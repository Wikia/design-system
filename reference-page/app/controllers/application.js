import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	// Routes with standalone components set this property
	standalone: false,

	navigation: [
		{
			name: 'Overview',
			id: 'main-navigation-overview',
			items: [
				{
					name: 'SVG assets',
					location: 'overview.svg-assets'
				},
			]
		},
		{
			name: 'Base styles',
			id: 'main-navigation-base-styles',
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
			id: 'main-navigation-components',
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
			id: 'main-navigation-identity',
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
