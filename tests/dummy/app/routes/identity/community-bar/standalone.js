import Route from '@ember/routing/route';
import model from '../../../models/community-header';

export default Route.extend({
	model() {
		return model.anon;
	},

	setupController() {
		this._super(...arguments);
		this.controllerFor('application').set('standalone', true);
		this.controllerFor('identity.community-bar').set('standalone', true);
	}
});
