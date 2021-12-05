import Vue from "vue";
import APIService from "@/service/APIService";
import { UserSignUp } from "@/model/user/userSignUp.model";

export default Vue.extend({
  name: "NewUser",
  data() {
    return {
      newUser: {} as UserSignUp,
      confirmPassword: "",
      errors: [],
    };
  },
  methods: {
    async createUser() {
      await APIService.signUp(this.newUser).then((response) => {
        if (response.status === 201) {
          this.$emit("created");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
  },
  computed: {
    arePasswordsSame(): boolean {
      return !!this.newUser.password && !!this.confirmPassword
        ? this.newUser.password !== this.confirmPassword
        : false;
    },
  },
});
