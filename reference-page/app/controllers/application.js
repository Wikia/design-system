import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
		{
			name: 'Buttons',
			location: 'component.button'
		},
		{
			name: 'Assets',
			location: 'component.assets'
		}
	]
});
