import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import track from '../utils/wds-track';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',
});
