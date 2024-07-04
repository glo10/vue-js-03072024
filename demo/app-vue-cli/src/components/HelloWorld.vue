<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> {{ name }}</h2>
    <h3> J'ai {{ age  }} an(s)</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  /**
   *  Données transmises du parent à l'enfant
   *  Côté parent : transmettre ses infos dans la balise de l'enfant
   *  Côté enfant: entre le balises script, définir les données avec la propriété props
   *  Et afficher les données dans la partie template
   * */
  props: {
    msg: {
      type: String,
      required: true,
      default: 'Message par défaut',
      validator: (value) => {
        return typeof value !== undefined
      }
    },
    name: String
  },
  data() {
    return {
      age: 32,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
