import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('component', function() {
    this.route('buttons');
    this.route('assets');
  });
});

export default Router;
