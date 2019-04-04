import Component from '@ember/component';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer-wikia-org',
	year: new Date().getYear() + 1900,
});
