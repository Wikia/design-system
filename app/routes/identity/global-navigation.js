import Ember from 'ember';
import model from '../../models/global-navigation';

export default Ember.Route.extend({
	model() {
		return model;
	}
});
