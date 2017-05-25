import Ember from 'ember';
import model from '../../models/community-header';

export default Ember.Route.extend({
	model() {
		return model;
	}
});
