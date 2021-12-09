<template>
  <div id="app">
    <div id="nav">
      <div v-if="isLoggedIn">
        <router-link to="/">User management</router-link>
      </div>
      <router-link v-if="!isLoggedIn" to="/auth">Sign In / Sign Up</router-link>
      <br />
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  async created() {
    this.isAdmin = await this.$store.getters.isAdmin;
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* route transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
