import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CvView from '../views/CvView.vue'
import ExperiencesView from '../views/ExperiencesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperiencesView
    }
  ]
})

export default router
