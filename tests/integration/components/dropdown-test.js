import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { create } from 'ember-cli-page-object';
import DropdownObject from '../../pages/components/dropdown';

const Dropdown = create(DropdownObject);

module('Integration | Component | dropdown', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
			<Dropdown as |d|>
				<d.toggle @text='test-lol' data-attr='test'/>
				<d.content data-attr='test'>
					content!
				</d.content>
			</Dropdown>
		`);

		assert.equal(Dropdown.toggle.text, 'test-lol', 'Accepts text as @text');
		assert.ok(Dropdown.toggle.icon.isPresent, 'Chevron is rendered');
		assert.equal(
			Dropdown.toggle.attr('data-attr'),
			'test',
			'Accepts any DOM attribute',
		);
		assert.ok(Dropdown.toggle.isPresent);
		assert.equal(Dropdown.content.text, 'content!');
		assert.equal(
			Dropdown.content.attr('data-attr'),
			'test',
			'Accepts any DOM attribute',
		);
	});

	test('supports block in toggle', async function(assert) {
		await render(hbs`
			<Dropdown as |d|>
				<d.toggle as |Chevron|>
					My Toggle <Chevron />
				</d.toggle>
			</Dropdown>
		`);

		assert.equal(
			Dropdown.toggle.text,
			'My Toggle',
			'Toggle text is rendered',
		);
		assert.ok(Dropdown.toggle.isDiv, 'Toggle rendered as a button element');
		assert.ok(Dropdown.toggle.icon.isPresent, 'Chevron is rendered');
	});

	test('toggle can be a link', async function(assert) {
		await render(hbs`
			<Dropdown as |d|>
				<d.toggle @text="test" @href="https://www.emberjs.com/"/>
			</Dropdown>
		`);

		assert.equal(Dropdown.toggle.text, 'test', 'Toggle text is rendered');
		assert.ok(Dropdown.toggle.icon.isPresent, 'Chevron is rendered');
		assert.ok(
			Dropdown.toggle.isLink,
			'Toggle rendered as an anchor element',
		);
		assert.equal(
			Dropdown.toggle.href,
			'https://www.emberjs.com/',
			'Toggle rendered with href',
		);
	});

	test('toggle responds to click', async function(assert) {
		assert.expect(2);

		this.set('onClick', function(event) {
			assert.ok(true);
			event.preventDefault();
		});
		await render(hbs`
			<Dropdown as |d|>
				<d.toggle @text="test" @onClick={{onClick}}/>
			</Dropdown>
		`);

		Dropdown.toggle.click();

		await render(hbs`
			<Dropdown as |d|>
				<d.toggle @text="test" @href="fandom.com" @onClick={{onClick}}/>
			</Dropdown>
		`);

		Dropdown.toggle.click();
	});

	test('content is rendered', async function(assert) {
		await render(hbs`
			<Dropdown as |d|>
				<d.content>
				</d.content>
			</Dropdown>
		`);

		assert.ok(Dropdown.content.isPresent, 'Content is present');

		await render(hbs`
			<Dropdown as |d|>
				<d.content @dropdownLeftAligned={{true}}>
				</d.content>
			</Dropdown>
		`);

		assert.ok(
			Dropdown.content.isLeftAligned,
			'Content can be left aligned',
		);
		assert.notOk(
			Dropdown.content.isScrollable,
			'Content when left aligned should not be scrollable',
		);

		await render(hbs`
			<Dropdown as |d|>
				<d.content @dropdownRightAligned={{true}}>
				</d.content>
			</Dropdown>
		`);

		assert.ok(Dropdown.content.isRightAligned);
		assert.notOk(Dropdown.content.isScrollable);

		await render(hbs`
			<Dropdown as |d|>
				<d.content @dropdownLeftAligned={{true}} @dropdownRightAligned={{true}}>
				</d.content>
			</Dropdown>
		`);

		assert.ok(Dropdown.content.isLeftAligned);
		assert.ok(Dropdown.content.isRightAligned);
		assert.notOk(Dropdown.content.isScrollable);

		await render(hbs`
			<Dropdown as |d|>
				<d.content @scrollable={{true}}>
				</d.content>
			</Dropdown>
		`);

		assert.ok(Dropdown.content.isScrollable);
	});

	test('can be rendered as level 2', async function(assert) {
		await render(hbs`
			<Dropdown as |d|>
				<d.toggle @text='level 1 toggle'/>
				<d.content>
					<Dropdown @isLevel2={{true}} as |d|>
						<d.toggle @text='level 2 toggle'/>
						<d.content>
							level 2 content
						</d.content>
					</Dropdown>
				</d.content>
			</Dropdown>
		`);

		assert.ok(Dropdown.secondLevel.isPresent);
		assert.ok(Dropdown.secondLevel.toggle.isPresent);
		assert.equal(Dropdown.secondLevel.toggle.text, 'level 2 toggle');
		assert.ok(Dropdown.secondLevel.content.isPresent);
		assert.equal(Dropdown.secondLevel.content.text, 'level 2 content');
	});

	test('responds to click when is a touch device', async function(assert) {
		await render(hbs`
			<Dropdown @isTouchDevice={{true}} as |d|>
				<d.toggle @text='test' />
			</Dropdown>
		`);

		assert.ok(Dropdown.isTouchDevice);

		await Dropdown.toggle.click();
		assert.ok(Dropdown.isActive);

		await Dropdown.toggle.click();
		assert.notOk(Dropdown.isActive);
	});

	test('triggers mouseenter/leave', async function(assert) {
		assert.expect(2);

		this.setProperties({
			onMouseEnter() {
				assert.ok(true);
			},
			onMouseLeave() {
				assert.ok(true);
			},
		});
		await render(hbs`
			<Dropdown @mouseEnter={{onMouseEnter}} @mouseLeave={{onMouseLeave}} as |d|>
				<d.toggle @text='test' />
			</Dropdown>
		`);

		await Dropdown.open();
		await Dropdown.close();
	});

	test('triggers mouseLeave when isTouchDevice', async function(assert) {
		assert.expect(2);

		await render(hbs`
			<Dropdown @isClicked={{true}} @isTouchDevice={{true}} as |d|>
				<d.toggle @text='test' />
			</Dropdown>
		`);
		assert.ok(Dropdown.isActive);
		await Dropdown.close();
		assert.notOk(Dropdown.isActive);
	});

	test('can be set to active state', async function(assert) {
		await render(hbs`
			<Dropdown @isActive={{true}}>
			</Dropdown>
		`);

		assert.ok(Dropdown.isActive);
	});

	test('can have shadow', async function(assert) {
		await render(hbs`
			<Dropdown @hasShadow={{true}}>
			</Dropdown>
		`);

		assert.ok(Dropdown.hasShadow);

		await render(hbs`
			<Dropdown @hasDarkShadow={{true}}>
			</Dropdown>
		`);
		assert.ok(Dropdown.hasDarkShadow);
	});

	test('chevron can be disabled', async function(assert) {
		await render(hbs`
			<Dropdown @noChevron={{true}} as |d|>
				<d.toggle>TEST</d.toggle>
			</Dropdown>
		`);

		assert.ok(Dropdown.noChevron);
	});
});
