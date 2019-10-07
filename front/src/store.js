import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: undefined,
    userName: undefined,
  },
  mutations: {
    login(state, payload) {
      state.userId = payload.userId;
      state.userName = payload.userName;
    },
    logout(state) {
      state.userId = undefined;
      state.userName = undefined;
    }
  },
  actions: {
    login({commit, state}, payload) {
      commit('login', payload);
    },
    logout({commit, state}) {
      commit('logout');
    }
  },
});
