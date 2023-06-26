import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import GalleryPage from "@/components/GalleryPage.vue";
import ContactForm from "@/components/ContactForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path:'/contacts',
      name:'/contact',
      component:ContactForm
    }
  ]
})

export default router
