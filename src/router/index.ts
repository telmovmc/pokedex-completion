// Components
import HomeView from '@/views/HomeView.vue'
import LegendsZAView from '@/views/LegendsZAView.vue'

// Utils
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/pokemon-legends-za', component: LegendsZAView },
  ],
})

export default router
