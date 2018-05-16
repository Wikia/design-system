import Controller from '@ember/controller';
import ENV from '../../config/environment';

export default Controller.extend({
	rootURL: ENV.rootURL,
	avatars: new Array(9).fill({
		src: `${ENV.rootURL}images/ludwik.jpeg`,
		alt: 'user name'
	})
});
