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
      showErrorAlert: {
        show: false,
        value: "",
      },
      disabled: true,
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
      await APIService.signUp(this.newUser)
        .then(() => this.signIn())
        .catch((err) => {
          console.log("err: ", err);
          if (err.response.statusCode === 409) {
            this.showErrorAlert = {
              show: true,
              value: err.response.message,
            };
          }
        });
    },
    async signIn() {
      console.log("login");
      const loginResponse = await APIService.signIn({
        username: this.newUser.username,
        password: this.newUser.password,
      });
      await this.$store.commit("setToken", loginResponse.headers.authorization);
      await this.$router.push("/");
      await this.$router.go(0);
    },
    validInput(): void {
      this.disabled = this.arePasswordsSame;
    },
  },
});
