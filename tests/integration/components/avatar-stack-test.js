import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { create } from 'ember-cli-page-object';
import AvatarStackObject from '../../pages/components/avatar-stack';

const AvatarStack = create(AvatarStackObject);

function generateAvatars(number) {
	return new Array(number).fill({
		src: '/images/FANDOM-Avatar.jpg',
		alt: 'user name',
	});
}

module('Integration | Component | avatar-stack', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		this.set('avatars3', generateAvatars(3));
		await render(hbs`<AvatarStack @avatars={{avatars3}} />`);

		assert.equal(AvatarStack.avatars.length, 3, 'should render 3 avatars');
		assert.notOk(
			AvatarStack.overflow.isPresent,
			'should render only 3 avatars',
		);

		this.set('avatars5', generateAvatars(5));
		await render(hbs`<AvatarStack @avatars={{avatars5}} />`);

		assert.equal(AvatarStack.avatars.length, 5, 'should render 5 avatars');
		assert.notOk(
			AvatarStack.overflow.isPresent,
			'should render only 5 avatars',
		);
	});

	test('renders overflow when more avatars passed', async function(assert) {
		this.set('avatars9', generateAvatars(9));

		await render(hbs`<AvatarStack @avatars={{avatars9}} />`);

		assert.equal(
			AvatarStack.avatars.length,
			5,
			'should render 5 avatars with overflow',
		);
		assert.ok(AvatarStack.overflow.isPresent, 'should render overflow');
		assert.equal(
			AvatarStack.overflow.text,
			'+4',
			'should render +4 in overflo',
		);
	});

	test('overrideCount works', async function(assert) {
		this.set('avatars30', generateAvatars(30));

		await render(hbs`<AvatarStack @avatars={{avatars30}} @overrideCount={{10}} />`);

		assert.equal(
			AvatarStack.avatars.length,
			5,
			'should render 5 avatars with overflow',
		);

		assert.ok(AvatarStack.overflow.isPresent, 'should render overflow');
		assert.equal(
			AvatarStack.overflow.text,
			'+5',
			'should render +5 in overflo',
		);

	});

	test('maxStackSize works', async function(assert) {
		this.set('avatars30', generateAvatars(30));

		await render(hbs`<AvatarStack @avatars={{avatars30}} @maxStackSize={{2}} />`);

		assert.equal(
			AvatarStack.avatars.length,
			2,
			'should render 2 avatars with overflow',
		);

		assert.ok(AvatarStack.overflow.isPresent, 'should  render overflow');
		assert.equal(
			AvatarStack.overflow.text,
			'+28',
			'should render +28 in overflo',
		);
	});

	test('hideOverflow works', async function(assert) {
		this.set('avatars30', generateAvatars(30));

		await render(hbs`<AvatarStack @avatars={{avatars30}} @hideOverflow={{true}} />`);

		assert.notOk(AvatarStack.overflow.isPresent, 'should not render overflow');

	});

	test('supports any attribute passed', async function(assert) {
		this.set('avatars1', generateAvatars(1));

		await render(hbs`<AvatarStack @avatars={{avatars1}} data-test="test"/>`);

		assert.equal(AvatarStack.attr('data-test'), 'test');
	});
});
