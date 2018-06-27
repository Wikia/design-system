export default function (event, element, trackFunction) {
	const elementToTrack = event.target.closest('[data-tracking-label]');

	if (elementToTrack && element.contains(elementToTrack)) {
		trackFunction(elementToTrack.getAttribute('data-tracking-label'));
	}
}
