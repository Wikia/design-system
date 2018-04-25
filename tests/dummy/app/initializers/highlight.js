import hljs from 'npm:highlight.js/lib/highlight.js';
import scss from 'npm:highlight.js/lib/languages/scss';
import xml from 'npm:highlight.js/lib/languages/xml';
import handlebars from 'npm:highlight.js/lib/languages/handlebars';

export function initialize(/* application */) {
	hljs.registerLanguage('scss', scss);
	hljs.registerLanguage('handlebars', handlebars);
	hljs.registerLanguage('xml', xml);

	window.define('highlight.js', function () {
		return hljs;
	})
}

export default {
  initialize
};
