import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessage.vue')
  },
  {
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login.vue')
  },
  {
    path: '/kamar',
    name: 'Kamar',
    component: () => import('../views/Kamar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
