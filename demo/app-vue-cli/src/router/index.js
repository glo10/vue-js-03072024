import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
    history: createWebHistory(), // mode de navigation
    routes, // idem routes : routes
})

export default router