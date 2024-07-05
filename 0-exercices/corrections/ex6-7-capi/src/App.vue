<script setup>
import TheCalculator from './components/TheCalculator.vue';
import BaseLayout from './components/BaseLayout.vue';
import TheGitHubCollection from './components/TheGitHubCollection.vue';
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1>Page d'accueil</h1>
    </template>
    <template #main>
      <h2>Contenu principal</h2>
      <TheGitHubCollection />
    </template>
    <template #footer>
      <h2>Pied de page</h2>
      <TheCalculator />
    </template>
  </BaseLayout>
</template>

<style scoped>
h1 {
  text-align: center;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
