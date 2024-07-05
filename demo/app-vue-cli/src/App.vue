<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Mise en place menu de navigation -->
  <!-- <router-link to="/">Accueil</router-link>&nbsp;
  <router-link :to="{name : 'Contact'}">Contact</router-link>&nbsp;
  <router-link :to="{ name : 'News'}">News</router-link>&nbsp; -->
  <!-- Les pages seront chargées au niveau de la balise RouterView -->
  <!-- Navigation dynamique à partir de toutes les routes -->
  <router-link
    v-for="{ name } in routes"
    :to="{ name }"
    :key="name"
  >
    {{ name }}&nbsp;
  </router-link>
  <RouterView />
</template>

<script>
import { routes } from './router/routes';
export default {
  name: 'App',
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
