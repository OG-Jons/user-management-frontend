import Vue from "vue";
import APIService from "@/service/APIService";
import { UserSignUp } from "@/model/user/userSignUp.model";

export default Vue.extend({
  name: "SignUp",
  data() {
    return {
      newUser: {
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
      } as UserSignUp,
      confirmPassword: "",
      errors: [] as { show: boolean; value: string }[],
    };
  },
  computed: {
    arePasswordsSame(): boolean {
      return !!this.newUser.password && !!this.confirmPassword
        ? this.newUser.password !== this.confirmPassword
        : false;
    },
  },
  methods: {
    async signUp() {
      this.errors = [] as { show: boolean; value: string }[];
      if (this.checkForm()) {
        await APIService.signUp(this.newUser)
          .then(() => this.signIn())
          .catch((err) => {
            if (err.response.status === 409) {
              this.errors.push({
                show: true,
                value: err.response.data.message,
              });
            }
          });
      }
    },
    checkForm(): boolean {
      // Check if all fields in newUser are filled and return true if they are
      if (
        !!this.newUser.username &&
        !!this.newUser.password &&
        !!this.newUser.email &&
        !!this.newUser.firstName &&
        !!this.newUser.lastName
      ) {
        return true;
      }

      if (!this.newUser.username) {
        this.errors.push({
          show: true,
          value: "Username is required",
        });
      }

      if (!this.newUser.password || !this.confirmPassword) {
        this.errors.push({
          show: true,
          value: "Password is required",
        });
      }

      if (!this.newUser.email) {
        this.errors.push({
          show: true,
          value: "Email is required",
        });
      }

      if (!this.newUser.firstName) {
        this.errors.push({
          show: true,
          value: "First name is required",
        });
      }

      if (!this.newUser.lastName) {
        this.errors.push({
          show: true,
          value: "Last name is required",
        });
      }

      return false;
    },
    async signIn() {
      console.log("login");
      const loginResponse = await APIService.signIn({
        username: this.newUser.username,
        password: this.newUser.password,
      });
      await this.$store.commit("setToken", loginResponse.data.accessToken);
      await this.$router.push("/");
      await this.$router.go(0);
    },
  },
});
