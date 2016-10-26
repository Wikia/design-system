import Ember from 'ember';
import model from '../../models/global-footer';

export default Ember.Route.extend({
	model() {
		return model;
	}
});
