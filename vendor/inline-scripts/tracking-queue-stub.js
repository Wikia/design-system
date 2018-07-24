window.M = window.M || {};

window.M.trackingQueue = window.M.trackingQueue || {
	push(callback) {
		callback(true);
	}
};
