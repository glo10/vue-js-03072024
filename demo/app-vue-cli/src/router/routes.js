// Toutes nos routes ici
import PageHomeView from "@/views/PageHomeView.vue"; // import global
export const routes = [
  {
    path: "/", // chemin url
    name: "Home", // Nom unique de la route rattaché au chemin
    component: PageHomeView, // Composant rattaché à cette route
  },
  {
    path: "/contact",
    name: "Contact",
    // import uniquement lorsqu'il y aura une requête vers cette page
    component: () => import('@/views/PageContactView.vue'),
    meta: {
        title: 'Page de contact'
    }
  },
  {
    path: "/newsletters",
    name: "News",
    component: () => import('@/views/PageNewsLettersView.vue'),
    meta: {
        title: 'Page de News'
    }
  },
  {
    path: "/users/:login?/:id?",
    name: "Users",
    component: () => import('@/views/PageUsersView.vue')
  },
];
