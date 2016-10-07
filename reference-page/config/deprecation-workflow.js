window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
	workflow: [
		{
			// We use a hacky way to generate code snippets automatically which causes this deprecation
			// It is related to potential perf issues and we don't care much for those
			handler: 'silence',
			matchId: 'ember-views.dispatching-modify-property'
		}
	]
};
