<template>
  <div>
    <SignOut />
    <Categories />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "@/components/Categories/Categories.vue";
import SignOut from "@/components/SignOut/SignOut.vue";

export default Vue.extend({
  name: "CategoryManagment",
  components: {
    Categories,
    SignOut,
  },
});
</script>
