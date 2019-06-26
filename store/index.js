import Vuex from 'vuex';
import * as root from './root';
import * as people from './modules/people';
import app from './modules/app'
import settings from './modules/settings'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    mutations: root.mutations,
    actions: root.actions,
    modules: {
      [people.name]: people,
      app,
      settings
    },
    getters
  });
};
export default createStore;
