import Vue from "vue";
import { User } from "@/model/user/user.model";
import APIService from "@/service/APIService";
import NewUser from "@/components/NewUser/NewUser.vue";
import { UserSignUp } from "@/model/user/userSignUp.model";

export default Vue.extend({
  name: "Users",
  data() {
    return {
      users: [] as User[],
      fields: [
        { key: "username", label: "Username" },
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "E-Mail" },
        { key: "id", label: "Management" },
      ],
    };
  },
  components: {
    NewUser,
  },
  methods: {
    async loadUsers(): Promise<void> {
      this.users = [] as User[];
      this.users = await APIService.getUsers();
    },
    async goToEdit(id: number): Promise<void> {
      await this.$router.push(`/edit/${id}`);
    },
    async deleteUser(id: number) {
      await APIService.deleteUser(id);
      const deletedUser = this.users.find((user) => user.id === id);
      if (deletedUser && deletedUser.username === this.$store.state.username) {
        await this.signOut();
      }
      this.users = this.users.filter((user) => user.id !== id);
    },
    async signOut() {
      await this.$store.commit("setToken", null);
      await this.$router.push("/auth");
    },

    async updateUserTable(): Promise<void> {
      await this.loadUsers();
      this.$bvModal.hide("new-user-modal");
    },
  },
  async created() {
    await this.loadUsers();
  },
});
