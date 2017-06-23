import 'es6-promise/auto'
import Vue from 'vue';
import Vuex from 'vuex';
import './mocks/VueJSPlugin.js';

export default {
  vuexStore: new Vuex.Store({}),
  createVueComponent(componentDefinition, constructionOptions) {
    const Ctor = Vue.extend(componentDefinition);
    return new Ctor(constructionOptions);
  }
}