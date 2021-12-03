import Vue from "vue";
import { User } from "@/model/user/user.model";
import APIService from "@/service/APIService";

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
  methods: {
    async loadUsers() {
      this.users = [] as User[];
      this.users = await APIService.getUsers();
    },
    async goToEdit(id: number): Promise<void> {
      await this.$router.push(`/edit/${id}`);
    },
    async deleteUser(id: number) {
      console.log("delete");
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
  },
  async created() {
    await this.loadUsers();
  },
});
