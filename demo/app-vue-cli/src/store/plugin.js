export default function toLoStorage(store) {
    store.subscribe((mutation, state) =>  {
        if(mutation.type === 'ADD_USER') {
            const user = mutation.payload
            console.log('stockage à faire', mutation, state, user)
        }
    })
}