<script setup>
const { label } = defineProps({
  label: {
    type: String,
  },
});
const emit = defineEmits(['btn:clicked'])
const toParent = () => {
  emit('btn:clicked')
}
</script>
<template>
  <div class="text-center">
    <button @click="toParent" class="btn btn-primary m-2">{{ label }}</button>
  </div>
</template>
