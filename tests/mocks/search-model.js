export default {
	"search": {
		"type": "search",
		"results": {
			"tracking_label": "search",
			"param-name": "query",
			"url": "//starwars.mateuszr.wikia-dev.pl/wiki/Special:Search"
		},
		"placeholder-inactive": {
			"type": "translatable-text",
			"key": "global-navigation-search-placeholder-inactive"
		},
		"placeholder-active": {
			"type": "translatable-text",
			"key": "global-navigation-search-placeholder-in-wiki",
			"params": {
				"sitename": {
					"type": "text",
					"value": "Wookieepedia"
				}
			}
		},
		"suggestions": {
			"url": "\/mocks/searchSuggestions.json?",
			"param-name": "query",
			"tracking_label": "search-suggestion"
		}
	}
};
