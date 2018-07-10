import Route from '@ember/routing/route';
import communityHeaderModel from '../../../models/community-header';
import globalNavigationModel from '../../../models/global-navigation';

export default Route.extend({
	model() {
		return {
			communityBar: communityHeaderModel.anon,
			globalNavigation: globalNavigationModel['logged-in-default']
		};
	},

	setupController() {
		this._super(...arguments);
		this.controllerFor('application').set('standalone', true);
		this.controllerFor('identity.community-bar').set('standalone', true);
	}
});
