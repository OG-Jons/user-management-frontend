<template>
  <button v-if="isLoggedIn" class="btn btn-danger mb-5" @click="signOut">
    Sign Out
  </button>
</template>
<script lang="ts" src="./SignOut.ts"></script>
