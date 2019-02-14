import { module, test } from 'qunit';
import Service from '@ember/service';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { create } from 'ember-cli-page-object';
import AvatarObject from '../../pages/components/avatar';

const Avatar = create(AvatarObject);

module('Integration | Component | avatar', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders default state', async function(assert) {
		await render(hbs`<Avatar @alt='test-alt' />`);

		assert.ok(
			Avatar.default.avatar.isPresent,
			'Default Avatar is rendered',
		);
		assert.notOk(Avatar.image.isPresent, 'Image is not rendered');
		assert.notOk(
			Avatar.link.isPresent,
			'No link is rendered if @href not passed',
		);
	});

    test('it renders avatar\'s title', async function(assert) {
        await render(hbs`<Avatar @alt='test-alt' />`);

        assert.equal(
            Avatar.title,
            'test-alt',
            'Title attribute is rendered',
        );
    });

	test('it renders provided image', async function(assert) {
		await render(hbs`
		<Avatar
			@src='/images/FANDOM-Avatar.jpg'
			@alt='test-alt'
		/>`);

		assert.equal(
			Avatar.image.src,
			'/images/FANDOM-Avatar.jpg',
			'Image is rendered',
		);
		assert.equal(Avatar.image.alt, 'test-alt', 'Alt attribute is rendered');
	});

	test('it renders as link to provided url', async function(assert) {
		await render(hbs`<Avatar @link='http://example.com' />`);

		assert.equal(
			Avatar.link.href,
			'http://example.com',
			'Link is rendered',
		);
	});

	test('it renders badge if provided', async function(assert) {
		this.owner.register(
			'service:i18n',
			Service.extend({
				t(msg) {
					return msg;
				},
			}),
		);

		await render(hbs`<Avatar @badge='admin' />`);
		assert.equal(
			Avatar.badge.name,
			'#wds-avatar-badges-admin',
			'Admin badge is rendered',
		);
		assert.equal(
			Avatar.badge.title,
			'design-system:wds-avatar-badges-admin-tooltip',
			'Title',
		);

		await render(hbs`<Avatar @badge='sysop' />`);
		assert.equal(
			Avatar.badge.name,
			'#wds-avatar-badges-admin',
			'Admin badge is rendered for sysop',
		);
		assert.equal(
			Avatar.badge.title,
			'design-system:wds-avatar-badges-admin-tooltip',
			'Title',
		);

		await render(hbs`<Avatar @badge='threadmoderator' />`);
		assert.equal(
			Avatar.badge.name,
			'#wds-avatar-badges-discussion-moderator',
			'Discussion moderator badge is rendered',
		);
		assert.equal(
			Avatar.badge.title,
			'design-system:wds-avatar-badges-discussion-moderator-tooltip',
			'Title',
		);
	});
});
