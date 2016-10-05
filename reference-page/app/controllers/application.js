import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
		{
			name: 'Buttons',
			location: 'component.buttons'
		},
		{
			name: 'Assets',
			location: 'component.assets'
		}
	]
});
