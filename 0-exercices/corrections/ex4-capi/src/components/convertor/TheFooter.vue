<script setup>
const props = defineProps({
  final: {
    type: Number
  },
});
</script>
<template>
  <footer>
    <div id="finalAmount" class="text-center">
      <h2>
        Converted Amount : {{ final }}
      </h2>
    </div>
    <div>
      <p>
        Credit
        <a href="https://www.geeksforgeeks.org/currency-converter-in-javascript/"
          >geeksforgeeks</a
        >
      </p>
    </div>
  </footer>
</template>
