<script setup>
import { ref, onMounted} from 'vue'
import { fetchJSON, getBaseApi } from '@/utils/fetchData';
const props = defineProps({
  currency: {
    type: String
  }
})
const currencies = ref()
onMounted(() => {
  const url = `${getBaseApi()}/${props.currency.toUpperCase()}`
  fetchJSON(url)
  .then(res => currencies.value = res.rates)
})

</script>
<template>
  <main>

    <h1>Conversion {{ currency.toUpperCase() }}</h1>
    <table>
      <thead>
        <tr>
          <th>Devises</th>
          <th>Taux</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rate, currency) in currencies" :key="currency">
          <td>{{ currency }}</td>
          <td>{{ rate }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>