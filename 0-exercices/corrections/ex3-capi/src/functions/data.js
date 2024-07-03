import { ref, computed } from 'vue'
export const firstname = ref('')
export const lastname = ref('')
export const age = ref(0)
export const techno = ref('')
export const technos = ref([])
export const ageToString = computed(() => {
  return age.value >= 18 ? 'Adulte' : 'ado'
})
export function add() {
    technos.value.push({ id: technos.value.length + 1, value : techno.value})
    techno.value = ''
  }