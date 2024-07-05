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
    component: () => import('@/views/PageContactView.vue')
  },
  {
    path: "/newsletters",
    name: "News",
    component: () => import('@/views/PageNewsLettersView.vue')
  },
  {
    path: "/actus",
    name: "Actus",
    component: () => import('@/views/PageNewsLettersView.vue')
  },
];
