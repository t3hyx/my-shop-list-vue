import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewlistView from '../views/NewlistView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/newlist', name: 'Newlist', component: NewlistView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
