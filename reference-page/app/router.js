import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function () {
	this.route('base-styles', function () {
		this.route('breakpoints');
		this.route('typography');
		this.route('colors');
	});

	// We have a good reason to call this route `route-components` and put it in `/components` path.
	// Ember requires you to keep route's (or to be strict - controller's) templates in `/templates` dir.
	// It also requires you to keep Ember component's templates in `/templates/components` dir.
	// If we had a route named `components` then its children's templates
	// would have to be in `/templates/components` together with Ember's components' templates.
	// This would be more messy than just the config we have below.
	//
	// If you have a better idea, feel free to improve this!
	this.route('route-components', {
		path: 'components'
	}, function () {
		this.route('assets');
		this.route('avatars');
		this.route('buttons');
		this.route('dropdowns');
		this.route('lists');
	});

	this.route('identity', function () {
		this.route('assets');
		this.route('global-footer');
	});
});

export default Router;
