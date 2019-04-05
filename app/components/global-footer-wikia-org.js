import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer-wikia-org',
	year: computed(() => new Date().getFullYear()),
});
