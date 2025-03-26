import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewlistView from '../views/NewlistView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/newlist', name: 'newlist', component: NewlistView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
