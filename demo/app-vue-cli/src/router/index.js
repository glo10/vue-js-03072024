import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
    history: createWebHistory(), // mode de navigation
    routes, // idem routes : routes
    // classe permettant de distinguer la route active (page courante) des autres
    linkActiveClass: 'link-active'
})

// Modifier le titre de la page  = balise title dans la partie head du HTML
router.beforeEach((to) => {
    document.title = to.meta.title??to.name // idem que to.meta.title?to.meta.title:to.name
})
export default router