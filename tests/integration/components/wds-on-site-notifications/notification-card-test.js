import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

function getModelStub(type) {
	const modelStub = new EmberObject({
		communityId: 123,
		communityName: "My Test Wiki",
		timestamp: 1528793961358,
		latestActors: [{
			avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
			id: 24851773,
			name: 'Username1',
			profileUrl: 'http://undefined/wiki/User'
		}],
		latestEventUri: 'http://community.wikia.com/d/p/123',
		snippet: 'Snippet.',
		title: 'Title',
		type: type,
		uri: 'http://community.wikia.com/d/p/123'
	});

	return modelStub;
}

module('Integration | Component | wds-on-site-notifications/notification-card', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));
	});

	module('for notification of type discussion-reply', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply'));
		});

		test('it should render as an LI with a proper classname', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('li').hasClass('wds-notification-card');
		});
	});
});
