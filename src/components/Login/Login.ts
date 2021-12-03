import Vue from "vue";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      showErrorAlert: {
        show: false,
        value: "",
      },
    };
  },
  methods: {
    async signIn() {
      await APIService.signIn({
        username: this.username,
        password: this.password,
      })
        .then(async (res) => {
          await this.$store.commit("setToken", res.data.accessToken);
          await this.$router.push("/");
          await this.$router.go(0);
        })
        .catch((err) => {
          if (err.response.code === 401) {
            this.showErrorAlert = {
              show: true,
              value: err.response.message,
            };
          }
        });
    },
  },
});
