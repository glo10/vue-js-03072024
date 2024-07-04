<script setup>
    const { label, currencies } = defineProps({
        label: {
            type: String,
        },
        currencies: {
          type: Object,
          default: ['EUR', 'USD', 'CHF', 'GBP']
        }
    })
    const emit = defineEmits(['select:currency'])
    const toParent = (event) => {
      emit('select:currency', { type: label, value: event.target.value })
    }
</script>
<template>
  <select class="form-control" @change="toParent">
    <option value="">Select One …</option>
    <option
      v-for="item in currencies"
      :key="item"
      :value="item"
    >{{item}}</option>
  </select>
</template>
