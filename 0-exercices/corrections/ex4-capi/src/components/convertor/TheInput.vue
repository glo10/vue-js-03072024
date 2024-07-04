<script setup>
const emit = defineEmits(['input:change'])
const { start } = defineProps({
  start: Number
})
const updateAmount = (event) => {
  emit('input:change', Number(event.target.value))
}

</script>
<template>
  <div class="form-group">
    <label for="oamount"> Amount to Convert : </label>
    <input type="number" :value="start" class="form-control searchBox" @change="updateAmount" id="oamount" />
  </div>
</template>
