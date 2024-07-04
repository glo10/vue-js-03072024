<template>
  <HelloWorld msg="Welcome to Your Vue.js App" name="Glodie Tshimini"/>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Le parent écoute l'événement personnalisé input:change transmis par le composant enfant InputComponent-->
  <InputComponent @input:change="update" />
  <!-- msg et name sont des props définis au niveau du composant enfant HelloWorld -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from '@/components/InputComponent.vue'

export default {
  // Nom du composant
  name: 'App',
  // fonctions
  methods: {
    update(payload) {
      console.log('payload envoyé par child', payload)
    },
    log() {
      console.log('monté')
    },
    info() {
      console.info('info')
    }
  },
  // Tous les composants enfants utilisés par le composant courant
  components: {
    HelloWorld,
    InputComponent,
  },
  // hook avant création
  beforeCreate() {
    console.log('création')
  },
  // hook après montage de l'instance dans le DOM
  mounted() {
    this.info(),
    this.log()
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
