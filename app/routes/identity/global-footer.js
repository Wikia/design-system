import Ember from 'ember';
import model from '../../models/global-footer';

const {Route} = Ember;

export default Route.extend({
	model() {
		return model;
	}
});
