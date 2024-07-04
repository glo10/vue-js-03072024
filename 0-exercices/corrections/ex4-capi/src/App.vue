<script setup>
import { ref, onBeforeMount } from "vue";
import TheHeader from "./components/convertor/TheHeader.vue";
import TheInput from "./components/convertor/TheInput.vue";
import TheSelect from "./components/convertor/TheSelect.vue";
import TheFooter from "./components/convertor/TheFooter.vue";
import TheButton from "./components/convertor/TheButton.vue";
let baseApi = "https://api.exchangerate-api.com/v4/latest";
/**
 * En cas de blocage CORS en développeme
 * https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
 * Il faut lancer le proxy avec npm run proxy
 */
if(import.meta.env.MODE === 'development') {
  baseApi = `http://127.0.0.1:7000/${baseApi}`
}
const start = ref(0);
const final = ref(0);
const from = ref("");
const to = ref("");
let currencies = ref({});

const getResults = () => {
  fetch(`${baseApi}/${from.value}`)
    .then((currency) => currency.json())
    .then(displayResults);
};

const fetchCurrencies = () => {
  fetch("/fixtures/currencies.json")
    .then(res => res.json())
    .then((data) => currencies.value = data.currencies)
};

const displayResults = (currency) => {
  let fromRate = currency.rates[from.value];
  let toRate = currency.rates[to.value];
  final.value = Number(((toRate / fromRate) * start.value).toFixed(2));
};

const clearValues = () => {
  start.value = 0;
  final.value = 0;
};

const updateInitAmount = (payload) => {
  start.value = payload;
};

const btnAction = (label) => {
  if (label.toLowerCase() === "convertir") {
    getResults();
  } else {
    clearValues();
  }
};
const updateCurrency = (payload) => {
  if (payload.type.toLowerCase() === "from") {
    from.value = payload.value;
  } else if (payload.type.toLowerCase() === "to") {
    to.value = payload.value;
  }
};
// Hook avant montage du composant dans le DOM
onBeforeMount(() => fetchCurrencies());
</script>

<template>
  <main>
    <TheHeader />
    <TheInput
      @input:change="updateInitAmount"
      :start="start"
    />
    <TheSelect
      v-for="label in ['from', 'to']"
      :key="label"
      :label="label"
      :currencies="currencies"
      @select:currency="updateCurrency"
    />
    <TheButton
      v-for="label in ['Convertir', 'Reset']"
      :key="label"
      :label="label"
      @btn:clicked="btnAction(label)"
    />
    <TheFooter :final="final" />
  </main>
</template>

<style scoped>
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
