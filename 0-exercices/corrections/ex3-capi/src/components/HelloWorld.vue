<script setup>
// import { firstname, lastname, age, ageToString, add, techno, technos } from '@/functions/data';
import { ref, computed } from 'vue'
const firstname = ref('')
const lastname = ref('')
const age = ref(0)
const techno = ref('')
const technos = ref([])
const ageToString = computed(() => {
  return age.value >= 18 ? 'Adulte' : 'ado'
})
function add() {
  technos.value.push({ id: technos.value.length + 1, value: techno.value })
  techno.value = ''
}
</script>

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
          <input type="text" v-model.trim="techno" placeholder="Techno" @keyup.enter="add">
          <input @click.prevent="add" type="submit" value="Ajouter">
        </form>
      </div>
    </section>
    <section>
      <h2>Affichage</h2>
      <div>
        <p>Nom : {{ lastname }}</p>
        <p>Prénom : {{ firstname }}</p>
        <p>{{ ageToString }}</p>
        <p>{{ techno }}</p>
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

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
