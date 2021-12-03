import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import jwtDecode from "jwt-decode";

Vue.use(Vuex);

Vue.use(VueCookies);

export default new Vuex.Store({
  state: {
    token: Vue.$cookies.get("token"),
    username: Vue.$cookies.get("username"),
  },
  mutations: {
    setToken(state, token) {
      if (token) {
        Vue.$cookies.set("token", token);
        let decoded = {
          username: "",
        };
        decoded = jwtDecode(token);
        if (decoded) Vue.$cookies.set("username", decoded.username);
      } else {
        Vue.$cookies.remove("token");
        Vue.$cookies.remove("username");
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
