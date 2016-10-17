import Ember from 'ember';
import ENV from '../../config/environment';

const {Controller} = Ember;

export default Controller.extend({
	rootURL: ENV.rootURL
});
