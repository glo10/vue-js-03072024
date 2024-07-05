<template>
  <main>
    <h1>Liste des utilisateurs</h1>
    <button @click="addUser">Ajouter un utilisateur</button>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.login }}</p>
      <p>{{ user.id }}</p>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['addUser']),
    log() {
      console.log('log')
    }
  }
};
</script>
