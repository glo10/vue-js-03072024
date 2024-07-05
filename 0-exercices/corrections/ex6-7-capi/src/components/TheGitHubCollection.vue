<script setup>
import { ref, onMounted } from 'vue'
import TheUserCard from "@/components/TheUserCard.vue";
import { fetchJSON } from "@/utils/fetchData";
const users = ref([])
const isLoading = ref(true)
onMounted(() => {
  fetchJSON('https://api.github.com/users')
    .then(data => {
      // ici uniquement pour avoir le temps de voir le loader
      // Déconseillé en prod de garder le seTimeout
      setTimeout(() => {
        users.value = data
        isLoading.value = false
      }, 5000)
    })
})
</script>
<template>
  <div class="row" :class="{ loader: isLoading }">
    <TheUserCard v-for="user in users" :key="user" :user="user" />
  </div>
</template>
<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  margin: auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
