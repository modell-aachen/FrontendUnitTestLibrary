import VueSelectMock from './VueSelect.vue';
import VuePaginationMock from './VuePagination.vue';
import FoswikiMock from './foswiki.js';
import moment from 'moment';
import Vue from 'vue';
import Vuex from 'vuex';

window.Vue = Vue;
Vue.use(Vuex);

let VueJSPluginMock = {
	foswiki: FoswikiMock,
	moment: moment,
	rootStore: new Vuex.Store({}),
	components: {
		"VueSelect": VueSelectMock,
		"VuePagination": VuePaginationMock
	}
}

window.VueJSPlugin = VueJSPluginMock;