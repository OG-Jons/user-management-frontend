import Vue from "vue";
import { User } from "@/model/user/user.model";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "EditUser",
  data() {
    return {
      user: {} as User,
      disabled: false,
      errors: [] as { value: string; show: boolean }[],
    };
  },
  methods: {
    async updateUser(): Promise<void> {
      this.errors = [] as { value: string; show: boolean }[];
      if (this.validateInput()) {
        await APIService.updateUser(this.user.id, this.user).then(() => {
          this.$router.push("/");
        });
      }
    },

    async cancelEdit(): Promise<void> {
      await this.$router.push("/");
    },

    validateInput(): boolean {
      if (
        !!this.user.username &&
        !!this.user.email &&
        !!this.user.firstName &&
        !!this.user.lastName
      ) {
        return true;
      }

      if (
        !this.user.username ||
        this.user.username.length < 3 ||
        this.user.username.length > 20
      ) {
        this.errors.push({
          value: "Username is invalid",
          show: true,
        });
      }

      if (!this.user.email) {
        this.errors.push({
          value: "Email is required",
          show: true,
        });
      }

      if (!this.user.firstName) {
        this.errors.push({
          value: "First name is required",
          show: true,
        });
      }

      if (!this.user.lastName) {
        this.errors.push({
          value: "Last name is required",
          show: true,
        });
      }

      return false;
    },
  },
  async created() {
    this.user = await APIService.getOneUser(parseInt(this.$route.params.id));
    if (this.user.username === this.$store.state.username) {
      this.disabled = true;
    }
  },
});
