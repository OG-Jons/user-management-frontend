import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";

Vue.use(Vuex);

Vue.use(VueCookies);

export default new Vuex.Store({
  state: {
    token: Vue.$cookies.get("token"),
  },
  mutations: {
    setToken(state, token) {
      if (token) {
        Vue.$cookies.set("token", token);
      } else {
        Vue.$cookies.remove("token");
      }
      state.token = token;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
});
