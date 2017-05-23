import Ember from 'ember';
import model from '../../models/page-header';

export default Ember.Route.extend({
	model() {
		return model;
	}
});
