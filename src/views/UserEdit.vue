<template>
  <div>
    <SignOut />
    <EditUser />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SignOut from "@/components/SignOut/SignOut.vue";
import EditUser from "@/components/UserEdit/EditUser.vue";

export default Vue.extend({
  name: "UserManagement",
  components: {
    SignOut,
    EditUser,
  },
});
</script>
