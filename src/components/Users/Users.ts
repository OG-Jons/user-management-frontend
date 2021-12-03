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
        { key: "firstName", label: "Vorname" },
        { key: "lastName", label: "Nachname" },
        { key: "email", label: "E-Mail" },
        { key: "id", label: "Speichern/Löschen" },
      ],
    };
  },
  methods: {
    async loadUsers() {
      this.users = [] as User[];
      this.users = await APIService.getUsers();
    },
    async deleteUser(id: number) {
      console.log("delete");
      await APIService.deleteUser(id);
      const deletedUser = this.users.find((user) => user.id === id);
      if (deletedUser && deletedUser.id === id) {
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
