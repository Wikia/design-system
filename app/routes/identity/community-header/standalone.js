import Ember from "ember";
import model from "../../../models/community-header";

const {Route} = Ember;

export default Route.extend({
	model(params) {
		return model[params['variant_name']];
	},

	setupController(controller) {
		this._super(...arguments);
		this.controllerFor('application').set('standalone', true);
		this.controllerFor('identity.community-header').set('standalone', true);
	}
});
