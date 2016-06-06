(function () {
	function ready(fn) {
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', fn);
		} else {
			document.attachEvent('onreadystatechange', function() {
				if (document.readyState === 'interactive') fn();
			});
		}
	}

	ready(function () {
		var colorPreviewGroups = document.querySelectorAll('.color-preview-group');

		for (var i = 0; i < colorPreviewGroups.length; i++) {
			colorPreviewGroups[i].addEventListener('click', function (event) {
				if (event.target && typeof event.target.hash === 'string') {
					var targetCard = document.getElementById(event.target.hash.slice(1));

					toggleHighlight(targetCard);
					setTimeout(function () {
						toggleHighlight(targetCard);
					}, 1000)
				}
			});
		}
	});

	function toggleHighlight(element) {
		if (element.classList.contains('highlight')) {
			element.classList.remove('highlight');
		} else {
			element.classList.add('highlight');
		}
	}
})();
