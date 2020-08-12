import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/albums2018',
    name: 'albums2018',
    component: () => import('../views/albums2018.vue')
  },
  {
    path: '/albums2019',
    name: 'albums2019',
    component: () => import('../views/albums2019.vue')
  },
  {
    path: '/russian2018',
    name: 'russian2018',
    component: () => import('../views/russian2018.vue')
  },
  {
    path: '/ep2018',
    name: 'ep2018',
    component: () => import('../views/ep2018.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
