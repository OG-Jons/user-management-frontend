<template>
  <div class="home">
    <SignOut />
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue"; // @ is an alias to /src
import SignOut from "@/components/SignOut/SignOut.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Dashboard,
    SignOut,
  },
});
</script>
