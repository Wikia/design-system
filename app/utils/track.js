export default function (event, element, trackFunction, action, category) {
	const elementToTrack = event.target.closest('[data-tracking-label]');

	if (elementToTrack && element.contains(elementToTrack)) {
		trackFunction({
			category: elementToTrack.getAttribute('data-tracking-category') || category,
			label: elementToTrack.getAttribute('data-tracking-label'),
			action
		});
	}
}
