import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
import MAVueJsPluginMock from './mocks/MAVueJsPlugin.js';

Vue.use(Vuex);

let store = new Vuex.Store();
Vue.use(MAVueJsPluginMock, {store});

window.Vue = Vue;

export default {
  createVueComponent(componentDefinition, constructionOptions) {
    const Ctor = Vue.extend(componentDefinition);
    return new Ctor(constructionOptions);
  }
}
