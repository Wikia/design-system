import Ember from 'ember';
import model from '../../../models/global-navigation';

export default Ember.Route.extend({
	model(params) {
		return model[params['variant_name']];
	},

	setupController(controller) {
		this._super(...arguments);
		this.controllerFor('application').set('standalone', true);
		this.controllerFor('identity.global-navigation').set('standalone', true);
	}
});
