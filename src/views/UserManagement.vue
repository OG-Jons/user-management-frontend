<template>
  <div>
    <SignOut />
    <Users />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Users from "@/components/Users/Users.vue";
import SignOut from "@/components/SignOut/SignOut.vue";

export default Vue.extend({
  name: "UserManagement",
  components: {
    Users,
    SignOut,
  },
});
</script>
