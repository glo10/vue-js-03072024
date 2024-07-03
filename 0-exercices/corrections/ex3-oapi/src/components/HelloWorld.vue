<template>
  <main>
    <header>
      <h1>Exercice 3</h1>
    </header>
    <section>
      <h2>Saisie</h2>
      <div>
        <form>
          <input type="text" v-model.trim="firstname" placeholder="Prénom">
          <input type="text" v-model.trim="lastname" placeholder="Nom">
          <input type="number" v-model="age" placeholder="Age">
          <input
            type="text"
            v-model.trim="techno"
            placeholder="Techno"
            @keyup.enter="add"
          >
          <input
            @click.prevent="add"
            type="submit"
            value="Ajouter"
            :disabled="techno.length === 0"
          >
        </form>
      </div>
    </section>
    <section>
      <h2>Affichage</h2>
      <div>
        <p>Nom : {{ lastname }}</p>
        <p>Prénom : {{ firstname }}</p>
        <p>{{ ageToString }}</p>
        <aside>
          <h3>Technos</h3>
          <ul>
            <li v-for="{ id, value } in technos" :key="id">{{ value }}</li>
          </ul>
        </aside>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      firstname: '',
      lastname: '',
      age: 0,
      techno: '',
      technos: []
    }
  },
  computed: {
    ageToString() {
      return this.age >= 18 ? 'Adulte': 'Ado'
    }
  },
  methods: {
    add() {
      this.technos.push({ id: this.technos.length + 1,  value: this.techno })
      this.techno = ''
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
