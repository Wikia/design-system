(function (M) {
	M.trackingQueue.push(function (isOptedIn) {
		if (isOptedIn) {
			// THIS SCRIPT IS COPIED FROM LIFTIGNITER DOCUMENTATION
			(function (w, d, s, p, v, e, r) {
				if (document.location.search.indexOf('noexternals=1') === -1) {
					w.$igniter_var = v;
					w[v] = w[v] || function () {
						(w[v].q = w[v].q || []).push(arguments);
					};
					w[v].l = 1 * new Date();
					e = d.createElement(s);
					r = d.getElementsByTagName(s)[0];
					e.async = 1;
					e.src = p + '?ts=' + (+new Date() / 3600000 | 0);
					r.parentNode.insertBefore(e, r);
				}
			})(window, document, 'script', '//cdn.petametrics.com/l9ehhrb6mtv75bp2.js', 'liftigniter');
		}
	});
})(window.M);
