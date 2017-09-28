import VueSelectMock from './VueSelect.vue';
import VuePaginationMock from './VuePagination.vue';
import FoswikiMock from './foswiki.js';
import moment from 'moment';
import $ from 'jquery';


let MAVueJsPluginMock = {
	install(Vue, options) {
		Vue.component('vue-select', VueSelectMock);
		Vue.component('vue-pagination', VuePaginationMock);

		Vue.directive('tooltip', {});

		//Global functions
		Vue.registerStoreModule = (name, module) => {
			options.store.registerModule(name, module);
		};

		Vue.onDocumentReady = (fn) => {
			$(fn);
		};

		Vue.instantiateEach = (selector, options) => {
			$(selector).each((i, element) => {
				let instanceOptions = Object.assign({}, options);
				instanceOptions.el = element;
				new Vue(instanceOptions);
			});
		}

		Vue.getConfigById = (id) => {
			return JSON.parse($('.' + id).html());
		};

		Vue.foswiki = FoswikiMock;
		Vue.moment = moment;

		Vue.prototype.$store = options.store;
		Vue.prototype.$foswiki = FoswikiMock;
		Vue.prototype.$moment = moment;
		Vue.prototype.$lang = "en";
		Vue.prototype.$ajax = $.ajax;
	}
}

export default MAVueJsPluginMock;