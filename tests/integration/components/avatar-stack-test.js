import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

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

		assert
			.dom('.wds-avatar')
			.exists({ count: 3 }, 'should render 3 avatars');
		assert
			.dom('.wds-avatar-stack__overflow')
			.exists({ count: 0 }, 'should render only 3 avatars');

		this.set('avatars5', generateAvatars(5));
		await render(hbs`<AvatarStack @avatars={{avatars5}} />`);

		assert
			.dom('.wds-avatar')
			.exists({ count: 5 }, 'should render 5 avatars');
		assert
			.dom('.wds-avatar-stack__overflow')
			.exists({ count: 0 }, 'should render only 5 avatars');
	});

	test('renders overflow when more avatars passed', async function(assert) {
		this.set('avatars9', generateAvatars(9));

		await render(hbs`<AvatarStack @avatars={{avatars9}} />`);

		assert
			.dom('.wds-avatar')
			.exists({ count: 5 }, 'should render 5 avatars with overflow');
		assert
			.dom('.wds-avatar-stack__overflow')
			.exists({ count: 1 }, 'should render overflow');
		assert
			.dom('.wds-avatar-stack__overflow')
			.hasText('+4', 'wrong value of overflow');
	});
});
