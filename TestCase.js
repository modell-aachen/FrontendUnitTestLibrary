import 'es6-promise/auto'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

let MockupStore = new Vuex.Store({});

export default {
  vuexStore: new Vuex.Store({}),
  createVueComponent(componentDefinition, constructionOptions) {
    const Ctor = Vue.extend(componentDefinition);
    return new Ctor(constructionOptions);
  }
}