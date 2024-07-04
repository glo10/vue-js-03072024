<script setup>
    const { label, currencies } = defineProps({
        label: {
            type: String,
        },
        currencies: {
          type: Object,
          default() {
            return ['EUR', 'USD', 'CHF', 'GBP']
          }
        }
    })
    const emit = defineEmits(['select:currency'])
    const toParent = (event) => {
      const payload = { type: label, value: event.target.value }
      emit('select:currency', payload)
    }
</script>
<template>
  <select class="form-control" @change="toParent">
    <option value="">Select One …</option>
    <option
      v-for="item in currencies"
      :key="item"
      :value="item">
      {{item}}
    </option>
  </select>
</template>
