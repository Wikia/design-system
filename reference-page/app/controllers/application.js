import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
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
