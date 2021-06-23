<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text @click="goBack">back</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>
