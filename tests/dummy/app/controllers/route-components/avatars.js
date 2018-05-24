import Controller from '@ember/controller';
import ENV from '../../config/environment';

export default Controller.extend({
	rootURL: ENV.rootURL,
	avatars: [
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: null,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: null,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
		{
			src: `${ENV.rootURL}images/ludwik.jpeg`,
			alt: 'user name'
		},
	]
});
