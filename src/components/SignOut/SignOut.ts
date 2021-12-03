import Vue from "vue";

export default Vue.extend({
  name: "SignOut",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    async signOut() {
      await this.$store.commit("setToken", null);
      await this.$router.push("/auth");
    },
  },
});
