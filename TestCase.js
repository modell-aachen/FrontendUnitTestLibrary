import 'es6-promise/auto'
import Vue from 'vue';
import Vuex from 'vuex';
import Grid from '../dev/components/Grid.vue'

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