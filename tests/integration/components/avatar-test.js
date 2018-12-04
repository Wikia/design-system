import { module, test } from 'qunit';
import Service from '@ember/service';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | avatar', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders default state', async function (assert) {
		await render(hbs`<Avatar />`);

		assert.dom('svg.wds-avatar__image')
			.exists('should render default avatar svg');
	});

	test('it renders provided image', async function (assert) {
		await render(hbs`<Avatar @src="/images/FANDOM-Avatar.jpg" />`);

		assert.dom('img[src="/images/FANDOM-Avatar.jpg"]')
			.exists('should render provided avatar image');
	});

	test('it renders as link to provided url', async function (assert) {
		await render(hbs`<Avatar @link="http://example.com" />`);

		assert.dom('a[href="http://example.com"]').exists('should render link');
	});

	test('it renders badge if provided', async function (assert) {
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));

		await render(hbs`<Avatar @badge="admin" />`);

		assert.dom('.wds-avatar__badge').exists('should render badge');
	});

    test(`it renders proper badge if sysop value is provided`, async function (assert) {
        this.owner.register('service:i18n', Service.extend({
            t() {
                return 'some string';
            }
        }));

        await render(hbs`<Avatar @badge="sysop" />`);

		assert.dom('.wds-avatar__badge use')
			.hasAttribute('xlink:href', '#wds-avatar-badges-admin')
    });

    test(`it renders proper badge if threadmoderator value is provided`, async function (assert) {
        this.owner.register('service:i18n', Service.extend({
            t() {
                return 'some string';
            }
        }));

        await render(hbs`<Avatar @badge="threadmoderator" />`);

		assert.dom('.wds-avatar__badge use')
			.hasAttribute('xlink:href', '#wds-avatar-badges-discussion-moderator')

    });
});
