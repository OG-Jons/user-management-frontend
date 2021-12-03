<template>
  <div id="app">
    <div id="nav">
      <div v-if="isLoggedIn && isAdmin">
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/cat">Kategorien</router-link> |
        <router-link to="/user">Benutzer</router-link>
      </div>
      <router-link v-if="!isLoggedIn" to="/auth">Login / SignUp</router-link>
      <br />
    </div>
    <router-view />
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
</style>
