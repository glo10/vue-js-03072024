<script>
export default {
    name: 'InputComponent',
    // liste de tous les événements qu'un enfant transmet à son parent
    emits: ['input:change', 'input:keypress'],
    methods: {
        // customEvent = événement personnalisé pour transmettre les infos au parent
        sendToParent(event) {
            const data = event.target.value
            // données à transmettre "les props à l'envers de l'enfant au parent"
            const payload = {
                type: event.type,
                value: data
            }
            // transmission
            this.$emit('input:change', payload)
        }
    }
}
</script>
<template>
    <input type="text" placeholder="un texte" @change="sendToParent">
</template>