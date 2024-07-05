import { createStore } from "vuex";
import toLocalStorage from './plugin.js'
const store = createStore({
    state: {
        users: []
    },
    mutations: {
        // Toutes les méthodes de la mutation prennent obligatoirement en 1er paramètre le state
        // En sécond paramètre optionnel, le payload (la donnée à modifier dans le state)
        ADD_USER: (state, user) => {
            state.users.push(user)
        }
    },
    actions: {
        // Chaque fonctions dans actions prend en paramètre un objet context
        // L'objet context possède une méthode commit qui permet de notifier la mutation
        addUser : ({ commit })  => {
            fetch('https://api.github.com/users/glo10')
            .then(res => res.json())
            .then((user) => {
                user.id = Math.floor(Math.random() * 1000)
                user.login += user.id
                commit('ADD_USER', user)
            })
            .catch(error => console.log('error fetch user', error))
        }
    },
    getters: {
        // Toutes les méthodes ont en 1er paramètre le state et 2nd paramètre les autres getters
        users : (state) => {
            return state.users.sort((a, b) => a.login > b.login)
        }
    },
    plugins: [toLocalStorage]
})

export default store