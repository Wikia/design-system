import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
		{
			name: 'Typography',
			location: 'base-styles.typography'
		},
		{
			name: 'Colors',
			location: 'base-styles.colors'
		},
		{
			name: 'Buttons',
			location: 'route-components.buttons'
		},
		{
			name: 'Assets',
			location: 'route-components.assets'
		}
	]
});
