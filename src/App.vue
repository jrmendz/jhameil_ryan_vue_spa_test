<template>
  <v-app>
    <v-toolbar app>
      <h1>SPA TEST</h1>
    </v-toolbar>
    <v-content>
      <v-container fluid>
    <!-- <img src="./assets/logo.png"> -->
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
