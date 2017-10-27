import VueSelectMock from './VueSelect.vue';
import VuePaginationMock from './VuePagination.vue';
import FoswikiMock from './foswiki.js';
import moment from 'moment';
import Base64 from 'js-base64';
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

		Vue.makeAbsoluteUrl = (url) => {
			const absoluteBasePath = FoswikiMock.getScriptUrl().replace(/bin\/$/,'');
			if(!url){
				url = "";
			}
			url = url.replace(/^\//,'');
			return `${absoluteBasePath}${url}`;
		};
		Vue.getConfigById = (id) => {
			let base64Config = $('.' + id).html();
			let config = Base64.Base64.decode(base64Config);
			return JSON.parse(config);
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
