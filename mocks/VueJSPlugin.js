import VueSelectMock from './VueSelect.vue';
import VuePaginationMock from './VuePagination.vue';
let VueJSPluginMock = {
	components: {
		"VueSelect": VueSelectMock,
		"VuePagination": VuePaginationMock
	}
}

window.VueJSPlugin = VueJSPluginMock;