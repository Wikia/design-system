import Component from '@ember/component';
export default Component.extend({

	actions: {
		openModal(modalType) {
			this.get('openModal')(modalType);
		},

		deactivateSearch() {}
	}
});
