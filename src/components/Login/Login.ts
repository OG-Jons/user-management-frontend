import Vue from "vue";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      errors: [] as {
        value: string;
        show: boolean;
      }[],
    };
  },
  methods: {
    async signIn() {
      this.errors = [] as { value: string; show: boolean }[];
      if (this.validateInput()) {
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
              this.errors.push({
                show: true,
                value: err.response.message,
              });
            }
          });
      }
    },

    validateInput(): boolean {
      if (!!this.username && !!this.password) {
        return true;
      }

      if (!this.username) {
        this.errors.push({
          show: true,
          value: "Username is required",
        });
      }

      if (!this.password) {
        this.errors.push({
          show: true,
          value: "Password is required",
        });
      }

      return false;
    },
  },
});
